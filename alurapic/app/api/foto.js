var mongoose = require('mongoose');
var api = {};

var model = mongoose.model('Foto');

/*var contador = 8;

var fotos = [
    {_id: 1, titulo: 'Leão', url:'http://www.fundosanimais.com/Minis/leoes.jpg' },
    {_id: 2, titulo: 'Gato', url:'http://www.fundosanimais.com/Minis/foto-um-gato.jpg' },
    {_id: 3, titulo: 'Lobo', url:'http://www.fundosanimais.com/Minis/fundos-lobos-cinzentos.jpg' },
    {_id: 4, titulo: 'Tigre', url:'http://www.fundosanimais.com/Minis/tigre-indiano.jpg' },
    {_id: 5, titulo: 'Aguia', url:'http://www.fundosanimais.com/Minis/foto-aguia.jpg' },
    {_id: 6, titulo: 'Leões', url:'http://www.fundosanimais.com/Minis/fotos-leoes.jpg' },
    {_id: 7, titulo: 'Aguia 2', url:'http://www.fundosanimais.com/Minis/aterragem-aguia.jpg' },
    {_id: 8, titulo: 'Aguia 3', url:'http://www.fundosanimais.com/Minis/aguia-cacar.jpg' }
];*/

api.lista = function(req , res) {
    model
        .find({})
        .then(fotos => {
            res.json(fotos);
        }, error => {
            console.log(error);
            res.status(500).json(fotos);
        });
    /*res.json(fotos);*/
}

api.buscaPorId = function(req, res){
    model  
        .findById(req.params.id)
        .then(foto => {
            console.log(foto);
            if(!foto) throw Error('Foto não encontrada');
            res.json(foto);
        }, error => {
            console.log(error);
            res.status(404).json(error);
        });
    /*var foto = fotos.find(function(){
        return fotos._id = req.params.id;
    });
    res.json(foto);*/
};

api.removePorId = function(req, res){
    model
        .remove({_id: req.params.id})
        .then(function(){
            res.sendStatus(204);
        },error => {
            console.log(error);
            res.status(500).json(error);
        });

    /*fotos.filter(function(foto){
        return foto._id != req.params.id;
    });
    res.sendStatus(204);*/
};

api.adiciona = function(req, res){
    model
        .create(req.body)
        .then(foto => {
            res.json(foto);
        },error => {
            console.log(error);
            res.status(500).json(error);
        });

    /*var foto = req.body;
    foto._id = ++contador;
    fotos.push(foto);
    res.json(foto);*/
};


api.atualiza = function(req, res){
    model
        .findByIdAndUpdate()
        .then(foto => {
            console.log(foto);
            res.json(foto);
        },error => {
            console.log(error);
            res.status(500).json(error);
        });
    /*var foto = req.body;
    var fotoId = req.params.id;

    var indice = fotos.findIndex(foto => {
        return foto._id == fotoId;
    });

    fotos[indice] = foto;

    res.sendStatus(200);*/
};

module.exports = api;
