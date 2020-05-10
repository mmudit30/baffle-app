const path = require("path");
const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    // console.log("Next doing");
    next();
});

app.use(express.static(__dirname + '/build'));

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000)
    .once("listening", ()=>{
        console.log("started on http://localhost:3000 ");
    })
    .on("error", (err)=>{
        console.log("ERror "+ err);        
    });
