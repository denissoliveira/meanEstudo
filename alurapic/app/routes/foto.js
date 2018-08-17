module.exports = function(app) {
    var api = app.api.foto;
    
    app.route('/v1/fotos')
        .get(api.lista)
        .post(api.adiciona);

    app.route('/v1/fotos/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId);

    //Substituido pelo de cima    
    /*app.get('/v1/fotos/:id', api.buscaPorId);
    app.delete('/v1/fotos/:id', api.removePorId);*/
};
