var mongoose = require('mongoose');

var schema = mongoose.Schema({
    tiulo:{
        type: String,
        require: true
    },
    url:{
        type: String,
        require: true
    },
    grupo:{
        type: Number,
        require: true
    }
});

mongoose.model('Foto', schema);