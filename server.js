var express = require('express');
var cors = require('cors');
var http = require('http');

var app = express();

app.set('port', (process.env.PORT || 5000));

// In production mode the * should be relaced with the appropriate domain name(s)
// (e.g. https://seismic-web-client.herokuapp.com if the client web app is hosted on https://seismic-web-client.herokuapp.com)
app.options('*', cors());
app.use(cors());

// Requests other than seismic data requests are serviced (statically) by the web app (from folder www)
app.use(express.static(__dirname + '/src'));
app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});
