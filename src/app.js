const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const task = require("./models/tasks");
const app = express();

app.use(express.static(__dirname + '/public')); //ARCHIVOS ESTATICOS
app.set('port', 3000); //SETTINGS DEL PUERTO 
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); //LOS ARCHIVOS HTML SE RENDERIZAN CON EJS
app.set('view engine', 'ejs'); //MOTOR DE PLANTILLA EJS

app.use(require('./routes/routes')); //REQUIRE EL ARCHIVO DE ROUTES

//CONEXIÓN CON LA DB
mongoose.connect('mongodb+srv://ASSO:PixelPay1234@cluster0.uggjy.mongodb.net/todo?retryWrites=true&w=majority')
    .then((result) => {
        console.log("conected with db");
        app.listen(app.get('port'), () => 
            {console.log("server is listening in localhost:3000");
        });
    }).catch((err) => {
        console.log('error:', err);});