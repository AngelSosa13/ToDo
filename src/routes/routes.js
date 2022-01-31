const express = require('express');
const Task = require('../models/tasks');
const router = express.Router();

//RUTA INICIAL QUE DEVUELVE EL INDEX.HTML
router.get("/", (req, res) => {
    res.render('index.html');
    show();
});

const show = async () => {
    const show = await Task.find();
    console.log(show);
}

//RUTA PARA POST
router.get("/add-task", (req, res) => {
    const NewTask = new Task({
        taskBody: 'Lhiuebn'
    });
    NewTask.save().then((result) => {res.send(result)}).catch((err) => {console.log(err)});
});



module.exports = router;