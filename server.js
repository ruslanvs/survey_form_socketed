var express = require("express");
var app = express();

var bodyParser = require('body-parser');
var path = require("path");
// var session = require( "express-session" );


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// app.use( session( {secret: 'codingdojorocks'} ) )

app.get('/', function(req, res) {
    res.render( "index" );
})

// app.post('/surveys/create', function(req, res) {
//     req.session.survey = req.body
//     res.redirect('/surveys/show');
// })

// app.get('/surveys/show', function(req, res) {
//     res.render('survey', {survey: req.session.survey});
// })

app.listen(8000, function() {
    console.log("listening on port 8000");
});