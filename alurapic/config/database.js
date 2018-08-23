module.exports = function(uri) {
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://' + uri);

    mongoose.connection.on('connected', function(){
        console.log('Conectado ao Banco de Dados.');
    });

    mongoose.connection.on('error', error => {
        console.log('Erro na conexão: ' + error);
    });

    mongoose.connection.on('disconnected', function(){
        console.log('Desconectado do Banco de Dados.');
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function(){
            console.log('Conexão fechada pelo término da aplicação.');
            process.exit(0); //terminado de forma esperada
        });
    });
};