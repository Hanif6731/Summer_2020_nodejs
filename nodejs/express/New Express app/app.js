var exprss = require('express');
var app=exprss();
var bodyParser=require('body-parser');
var home=require('./controllers/home');
var login=require('./controllers/login');

app .set('view engine','ejs');
app.use(bodyParser());
app.use('/home',home);
app.use('/login',login);

app.listen(3000,function () {
console.log("Server started at port 3000....");
});
