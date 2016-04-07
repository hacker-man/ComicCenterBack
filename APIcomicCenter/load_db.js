"use strict";
//Se requieren la conexión y los modelos de la base de datos:
require('./lib/connectDB');
require('./models/itemModel');
require('./models/usuarioModel');
var mongoose = require('mongoose');
var Usuario = mongoose.model('Usuario');
var Item = mongoose.model('Item');
var hash = require('hash.js');
var async = require('async');
var fs = require('fs');

function eliminaUsuarios() {
    return new Promise(function (resolve, reject) {
        Usuario.remove({}, function (err) {
            if (err)
                reject(console.log('Error al eliminar usuarios', err));

        });
        resolve(console.log('Usuarios eliminados'));
    });

}

function eliminaItems() {
    return new Promise(function (resolve, reject) {
        Item.remove({}, function (err) {
            if (err)
                reject(console.log('Error al eliminar items', err));

        });
        resolve(console.log('Items elimnados'));
    });

}

function cargaUsuarios() {
    return new Promise(function (resolve, reject) {
        fs.readFile('usuarios.json', {
            encoding: 'utf8'
        }, function (err, data) {
            if (err) {
                reject(err);
            }

            var datosDB = JSON.parse(data);
            var usuarios = datosDB["usuarios"];

            async.each(usuarios, function cada(item, siguiente) {
                var usuario = new Usuario({
                    nickname: item.nickname,
                    password: item.password,//hash.sha256().update(item.password).digest('hex'),
                    email: item.email,
                    tlf: item.tlf
                });
                usuario.save(function (err, usuarioCreado) {
                    if (err) {
                        siguiente(err);
                        return;
                    }
                    siguiente();
                });
            }, function (err) {
                if (err) {
                    reject("Se ha producido un error al cargar usuarios", err);
                } else {
                    resolve(console.log('Usuarios cargados'));
                }
            });

        });
    });
}

function cargaItems() {
    return new Promise(function (resolve, reject) {
        fs.readFile('items.json', {
            encoding: 'utf8'
        }, function (err, data) {
            if (err) {
                reject(err);
            }

            var datosDB = JSON.parse(data);
            var items = datosDB["items"];

            async.each(items, function cada(item, siguiente) {
                var item = new Item({
                    ISBN: item.ISBN,
                    titulo: item.titulo,
                    url_portada:item.url_portada,
                    editorial: item.editorial,
                    autor: item.autor,
                    genero: item.genero,
                    num_paginas: item.num_paginas,
                    anio_edit: item.anio_edit,
                    tipo: item.tipo,
                    precio: item.precio,
                    uploadBy: item.uploadBy
                });
                item.save(function (err, itemCreado) {
                    if (err) {
                        siguiente(err);
                        return;
                    }
                    siguiente();
                });
            }, function (err) {
                if (err) {
                    reject("Se ha producido un error al cargar los items", err);
                } else {
                    resolve(console.log('Items cargados'));
                }
            });

        });
    });
}


eliminaUsuarios()
    .then(eliminaItems)
    .then(cargaUsuarios)
    .then(cargaItems)
    .then(function () {
        process.exit();
    })
    .catch(function (err) {
        console.log("Error", err);
    });
