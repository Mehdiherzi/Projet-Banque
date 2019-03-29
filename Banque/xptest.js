
var express = require('express') ; // import module express
var bodyParser = require('body-parser'); // import module body-parser
var banque = require('./banque'); // import module banque

var app = express() ; 

app.get('/', function (req, res) {
    res.send('Hello World!') ;
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!') ;
    });