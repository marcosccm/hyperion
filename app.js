var express = require("express");
var app = express();
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/', express.static(__dirname + '/public'));
var server = app.listen(3000, function() {
  console.log("potato");
});

