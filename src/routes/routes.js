const express = require('express');
const router = express.Router();

//RUTA INICIAL QUE DEVUELVE EL INDEX.HTML
router.get("/", (req, res) => {
    //res.sendFile(path.join(__dirname + "/index.html"));
    res.render('index.html');
});

module.exports = router;