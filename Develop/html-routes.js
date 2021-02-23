var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const fs = require('fs');
const { json } = require('body-parser');

var app = express();
app.use(bodyParser.json());

let rawdata = fs.readFileSync('db/db.json');
const student = JSON.parse(rawdata);

console.log(student);




app.use(express.static(__dirname + '/public'));


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
    var newId = 0;
    // iterate over student array to find the highest id
    student.forEach(function(obj){
        if (obj.id > newId){
            newId = obj.id; 
        }
    });
    newId++;
    var newNote = req.body;
    newNote.id = newId;
    student.push(newNote);
    fs.writeFile('db/db.json', JSON.stringify(student) , (err) => {
        if (err) {
            console.log("error writing to file");
        }
        

    });
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

