const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const friendModule = require('./friendModel')
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
 
app.get('/', function (req, res) {
    res.send("Home Page")
})

app.get('/api/friend', function (req, res) {
    res.sendfile("./data/friends.json")
})

app.post('/api/friend', function (req, res) {
    calculateDifferance()
    res.sendfile("./data/friends.json")
})
app.post('/test', function(request, response){
    console.log(request.body.scores);
    response.end(request.body.scores);
  
});
 
app.listen(3000)

const scoreA =[5,1,4,4,5,1,2,5,4,1];
const scoreB =[5,2,1,4,5,1,2,5,4,1];




