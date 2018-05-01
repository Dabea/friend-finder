const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const friendModule = require('./friendModel')
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
 
app.get('/', function (req, res) {
    res.sendfile("home.html")
})

app.get('/survey', function (req, res) {
    res.sendfile("survey.html")
})

app.get('/api/friends', function (req, res) {
    res.sendfile("./data/friends.json")
})

app.post('/api/friends', function (req, res) {
    let newscores = req.body.scores;
    friendModule(newscores).then((data)=> res.send(data))
    console.log(newscores);
})



 
app.listen(3000)



