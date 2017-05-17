var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var path = require('path');

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});
app.use('/resources', express.static(path.join(__dirname, 'resources')));

app.listen(port);