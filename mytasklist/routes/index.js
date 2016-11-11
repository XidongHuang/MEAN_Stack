
var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
	console.log('Index page.');
	next();
}); 


router.get('/', function(req, res, next){
	res.render('index.html');

});

module.exports = router;