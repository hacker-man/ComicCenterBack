"use strict";

var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    ISBN: Number,
    titulo: String,
    editorial: String,
    autor: String,
    genero: [String],
    num_paginas: Number,
    anio_edit: Date,
    tipo:String
});

var Item = mongoose.model('Item',itemSchema);