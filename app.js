const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
} )

app.listen(3000, () => 
    {console.log("server is listening in localhost:3000");
});