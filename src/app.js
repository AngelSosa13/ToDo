const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + '/public')); //ARCHIVOS ESTATICOS
app.set('port', 3000); //SETTINGS DEL PUERTO 
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); //LOS ARCHIVOS HTML SE RENDERIZAN CON EJS
app.set('view engine', 'ejs'); //MOTOR DE PLANTILLA EJS

app.use(require('./routes/routes')); //REQUIRE EL ARCHIVO DE ROUTES

app.listen(app.get('port'), () => 
    {console.log("server is listening in localhost:3000");
});