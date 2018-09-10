const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require("body-parser");
const fs = require('fs')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    let date = new Date();
    fs.appendFile('logger.log', `${date} ${req.method} ${req.url} \n` , (err) => {
        if(err)
            console.log(err);
    })
    next();
});

app.get('/', (req, res)=>{
    res.send("Nothing to send");
    res.end();
});

app.get('/course', (req, res)=>{
    res.send({
        course: 'express',
        students:[
            'Chetan',
            'John',
            'Geethu'
        ]
    });
    res.end();
});

app.get('/home', (req, res)=>{
    //res.send("<h1>Home Page</h1>");
    
    res.sendFile(path.join(__dirname + '/public/home.html'));
   // res.send("<h1>Home Page</h1>");
    //res.end();
});

app.post('/api/users', function(req, res) {
   var user_id = req.body.id;
   var token = req.body.token;
   var geo = req.body.geo;
   //res.send("afadfda")
   res.send(user_id + ' ' + token + ' ' + geo);
});

app.listen(3000, () => console.log("Listening on port 3000"));

