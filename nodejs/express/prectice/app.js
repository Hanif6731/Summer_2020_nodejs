var express = require('express');
var home=require('./controllers/home.js')
//var ejs = require('ejs');
var app=express();


app .set('view engine','ejs');

app.get('/',function (req,res) {
    //console.log("first express app");
    res.send('<h1>Hello Hanif</h1>')
})

//midleware
app.use('/home',home);


app.get('/login', (req,res)=> {
    //console.log("first express app");
    res.send('<h1>this is login page</h1>')
})


app.listen('3000',function () {
console.log("server started");
});


