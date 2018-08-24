module.exports = function(app) {
    var mongoose = require('mongoose');
    var jwt = require('jsonwebtoken')

    var api = {};
    var model = mongoose.model('Usuario');

    api.autenticar = function(req, res) {
        model
            .findOne({login: req.body.login, senha: req.body.senha})
            .then(usuario => {
                if(!usuario) {
                    console.log('Login e senha inválidos');
                    res.sendStatus(401);
                }else{
                    var token = jwt.sign(usuario.login, app.get('secret'), {
                        //expiresIn: 86400 // valor em segundo, aqui temos um total de 24 horas
                        //não funcionou
                    });
                    console.log('Token criado e sendo enviado no header de resposta');
                    res.set('x-access-token',token);
                    res.end();
                }
            }, error => {
                console.log('Login e senha inválidos');
                res.sendStatus(401);
            });
    };

    api.verificarToken = function(req, res, next) {
        var token = req.headers['x-access-token'];
        if (token) {
            console.log('Verificando Token...');
            jwt.verify(token, app.get('secret'), function(err, decoded) {
                if (err) {
                    console.log('Token rejeitado');
                    res.sendStatus(401);
                }
                req.usuario = decoded;
                next(); //pode passar para o proximo midware rota
            });
        } else {
            console.log('Token não enviado');
            res.sendStatus(401);
        }
    };
    return api;
}

