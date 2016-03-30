var express = require('express');
var path = require('path');
var app = express();

app.listen(3000, function () {
  console.log("server started : 3000");
  console.log(__dirname);
});

app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'jade');

app.get('/', function(request, response) {
  response.render('index');
});

app.use(express.static('public'));

