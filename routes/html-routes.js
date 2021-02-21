var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '11-express\02-Homework\Develop\public\notes.html'));
});

app.listen(8080);