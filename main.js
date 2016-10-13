//Some useful definitions
port = 5000

//Create an Express application object
var express = require('express');
var app = express();

//Set the port value
app.set('port', port);

//Serve static content for the app from the "static" directory in the application directory
app.use(express.static(__dirname + '/static'));

//Set the directory for all template files
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');
//console.log("__dirname: " + __dirname) XXX

app.get('/', function(request, response) {
    //response.render('pages/index');
    response.send(request.hostname);
});
/*
app.get('/test', function(request, response) {
    response.render('pages/test');
});
*/

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
