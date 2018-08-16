var http = require('http');

http.createServer(function(req, res){
    res.end('OK');
}).listen(3000, function(){
    console.log('Rodando em localhost na porta 3000');
});