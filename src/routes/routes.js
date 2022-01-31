const express = require('express');
const Task = require('../models/tasks');
const BodyParser = require('body-parser');
const router = express.Router();

router.use(BodyParser.urlencoded({extended : true}));

//RUTA INICIAL QUE DEVUELVE EL INDEX.HTML
router.get("/", (req, res) => {
    res.render('index.html');
    show();
});

const show = async () => {
    const results = await Task.find();
    //console.log(results);
}

//RUTA PARA POST
router.post("/", (req, res) => {
    var add = req.body.newInput;
    const NewTask = new Task({
        taskBody: `${add}`
    });
    NewTask.save().then((result) => {res.send(result)}).catch((err) => {console.log(err)});
    //console.log(NewTask);
    res.redirect('/');
});

function Remove() {
    
}


module.exports = router;