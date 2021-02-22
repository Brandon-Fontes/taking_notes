var express = require('express');
var fetch = require('fetch');
var app = express();
var path = require('path');
const data = fetch('db/db.json');
console.log(data);

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
    //delete the id requested
    //re write json file
    res.sendFile(path.join(__dirname, 'db', 'db.json'));
});



app.listen(8080);
console.log("listening at http://localhost:8080");

