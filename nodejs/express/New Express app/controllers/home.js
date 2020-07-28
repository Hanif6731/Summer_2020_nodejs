var express=require('express');
var router=express.Router();


router.get('/',function (req,res) {
 res.send("<h1>hi</h1>")
});

router.post('/',function (req,res) {
    res.send("<h1>hi</h1>")
});

module.exports=router;

