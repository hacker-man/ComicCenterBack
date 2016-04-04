"use strict";

var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({
    nickname: {
        type:String,
        trim:true
    },
    password:String,
    poblacion: String,
    provincia: String,
    CP: Number,
    email: String,
    tlf: String
});

var Usuario = mongoose.model('Usuario',usuarioSchema);