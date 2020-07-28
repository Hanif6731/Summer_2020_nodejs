var express = require('express');
//var ejs = require('ejs');
var router=express.Router();

router.get('/',function (req,res) {
    //console.log("first express app");
    var data ={
        name: 'Hanif',
        id:'17-33673-1'
    }
    res.render('home',data)
})

router.post('/',(req,res)=>{
    res.send('<h1>home posted</h1>');
});

module.exports=router;
