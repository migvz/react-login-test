const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});
app.get('/', (req, res) => {
    res.send('Please use post');
});
app.post('/login',(req,res) => {
    if(req.body.username === "me" && req.body.password === "letmein"){
        res.send(JSON.stringify({ version: process.version , 
            date: new Date(),
            username:req.body.username,
            password: req.body.password
         }));
    }
    else{
        res.status(500);
        res.send(JSON.stringify({ error: "Access Denied"}));
    }
});

app.listen(3001,() => {
    console.log('up and running');
});