/**
 * Our main express server for hosting our files
 *
 * @author  Sean Teare <steare573@gmail.com>
 * @since  2015-07-01
 */
var express = require('express');
var app = express();
var port = process.env.PORT || 7000;
var debug = require('debug')('neutron');
// Serve up our static content from the following directories
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/public/js'));

// Route for our base -demo (does not yet exist)
app.get('/', function(req, res) {
  debug('Serving Base React Demo.');
  res.sendFile(__dirname + '/src/templates/react-demo.html');
});

// Route for our common js demo
app.get('/commonjs-demo', function (req, res) {
  debug('Serving CommonJS React Demo.');

  res.sendFile(__dirname + '/src/templates/react-demo-commonjs.html');
});

var server = app.listen(port, function() {
  debug('Now serving the app on port ' + port);
  debug('Serving from src/templates/main.html');
});