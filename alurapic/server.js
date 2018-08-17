var http = require('http');
var app = require('./config/express');

http.createServer(app).listen(3000, function(){
    console.log('Rodando em localhost na porta 3000');
});