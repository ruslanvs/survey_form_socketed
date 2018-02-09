var express = require("express");
var app = express();

var bodyParser = require('body-parser');
var path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render( "index" );
})

var server = app.listen( 8000, function() {
    console.log( "listening on port 8000" );
});

var io = require( "socket.io" ).listen( server );

io.sockets.on( "connection", function( socket ){
    console.log( "Client/socket is connected")
    console.log( "Client/socket id is: ", socket.id );
    
    socket.on( "form_submit", function( data ){
        data.lucky_nr = Math.ceil( Math.random()*1000  );
        socket.emit( "server_response", { response: data } );
    })
})