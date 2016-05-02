var express = require('express'),
    router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index',{title: 'Roman Numeral Converter'});
});

module.exports = router;
