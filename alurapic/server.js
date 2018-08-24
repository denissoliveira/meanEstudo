var http = require('http');
var app = require('./config/express');
//require('./config/database')('192.168.99.100/alurapic'); //carregando para testar conexão do mongoDB
require('./config/database')('localhost/alurapic'); //carregando para testar conexão do mongoDB

http.createServer(app).listen(3000, function(){
    console.log('Rodando em localhost na porta 3000');
});