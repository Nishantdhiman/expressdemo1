var express = require('express');
var router = express.Router();  

router.get('/show', function(req, res){
console.log('Default root is called');
res.end();
});

router.get('/', function(req, res){
res.render('index');
});


module.exports=router;
