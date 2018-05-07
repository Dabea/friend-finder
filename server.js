const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const friendModule = require('./friendModel')
var fs = require('fs');
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
    updateList(req.body);
})

app.get('/api/test', function (req, res) {
    getCompleteList().then(data => res.send(data))
})

function getCompleteList(){
    return new Promise ((reslove, reject) =>{
        fs.readFile('./data/friends.json', 'utf8', function (err, data) {
            if (err)  throw err;
            friendData = JSON.parse(data);
            reslove(friendData);
          })
    })
}

function updateList(friend){
    const list = getCompleteList();
    list.then( data =>{
       data.push(friend);
       const string = JSON.stringify(data);
       console.log(string)
       fs.writeFile( "./data/friends.json", string, "utf8", (err) => {
           if(err) throw err;
           console.log("updated")
       })
    } )
}


 
app.listen(PORT)



