"use strict";

var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({
    nickname: {
        type: String,
        trim: true
    },
    password: String,
    poblacion: String,
    provincia: String,
    CP: Number,
    email: String,
    tlf: String
});
usuarioSchema.statics.list = function (sort, cb) {
    var query = Usuario.find({});
    query.sort(sort);
    query.exec(function (err, rows) {
        if (err) {
            cb(err);
            return;
        }
        cb(null, rows);
        return;
    });
}

var Usuario = mongoose.model('Usuario', usuarioSchema);