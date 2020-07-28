var express=require('express');
var router=express.Router();


router.get('/',function (req,res) {
    res.render('login');
});

router.post('/',function (req,res) {
    res.send("<h1>logged in</h1>")
    console.log(req.body);
});

module.exports=router;

