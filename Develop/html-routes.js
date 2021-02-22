var express = require('express');
var app = express();
var path = require('path');
const fs = require('fs');

let rawdata = fs.readFileSync('db/db.json');
let student = JSON.parse(rawdata);

console.log(student);




app.use(express.static(__dirname + '/public'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public','index.html' ));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, 'db', 'db.json'));
});

app.post("/api/notes", function(req, res) {
    let title = req.params.textTitle;
    res.sendFile(path.join(__dirname, 'db', 'db.json'));
});


app.delete("/api/notes/:id", function(req, res) {
    let id = req.params.id;
    //load db.json into a variable
    //iterate over json
    let key = student.id;
    delete student[key];
    //delete the id requested
    //re write json file
    res.sendFile(path.join(__dirname, 'db', 'db.json'));
});



app.listen(8080);
console.log("listening at http://localhost:8080");

