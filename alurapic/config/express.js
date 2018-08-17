var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());

consign({ cwd : 'app'}) //diretorio de trabalho atual
    .include('api')
    .then('routes')
    .into(app);

module.exports = app;