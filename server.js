var express = require('express');
var cors = require('cors');
var http = require('http');

var app = express();

app.set('port', (process.env.PORT || 5000));

// In production mode the * should be relaced with the appropriate domain name(s)
app.options('*', cors());
app.use(cors());

app.use(express.static(__dirname + '/src'));
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

