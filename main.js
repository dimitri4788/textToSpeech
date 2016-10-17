//Some useful definitions
port = 5000

//Create an Express application object and load serve-favicon module
var express = require('express');
var favicon = require('serve-favicon');
var app = express();

//Set the port value
app.set('port', port);

//Serve static content for the app from the "static" directory in the application directory
app.use(express.static(__dirname + '/static'));
app.use(favicon(__dirname + '/static/images/favicon.ico'));

//Set the directory for all template files
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('index');
    //response.send(request.hostname);
});
app.get('/about', function(request, response) {
    response.render('test');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

//TODO: Include normalize.css in my project: http://nicolasgallagher.com/about-normalize-css/
//TODO look at popular CSS libraries nowadays
