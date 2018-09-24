var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render("index");
})
app.get('/blackjack', function(req, res) {
    res.render("blackjack");
})
app.listen(8000, function() {
    console.log("listening on port 8000");
});