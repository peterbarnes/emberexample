var http = require('http');
var express = require('express');
var app = express();

app.set('title', 'My Site');
app.use(express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.listen(3000);

