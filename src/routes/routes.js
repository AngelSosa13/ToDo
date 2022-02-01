const express = require('express');
const Task = require('../models/tasks');
const BodyParser = require('body-parser');
const router = express.Router();

router.use(BodyParser.urlencoded({extended : true}));

var taskArray = [''];

const show = async () => {
    const results = await Task.find();
    return taskArray = results;
}

//RUTA INICIAL QUE DEVUELVE EL INDEX.HTML
router.get("/", async (req, res) => {
    const taskes = await Task.find({}, {taskBody:1,_id:0});
    res.render('index.html', {arr:taskes});
});

//RUTA PARA POST SAVE
router.post("/", (req, res) => {
    var add = req.body.newInput;
    const NewTask = new Task({
        taskBody: `${add}`
    });
    NewTask.save().then((result) => {res.send(result)}).catch((err) => {console.log(err)});
    //console.log(NewTask);
    res.redirect('/');
});

//RUTA PARA PUT DELETE ALL
router.post("/dAll", (req, res) => {
    Task.collection.remove();
    console.log('ok:1');
    res.redirect('/');
});

module.exports = router;