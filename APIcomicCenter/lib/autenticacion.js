"use strict";

var mongoose = require('mongoose');
var Usuario = mongoose.model('Usuario');
var basicAuth = require('basic-auth');
var hash = require('hash.js');


var auth = function () {
    return function (req, res, next) {
        var userReq = basicAuth(req) || "";
        console.log(userReq.name);
        var usuario = Usuario.find({
            nickname: userReq.name
        });
        usuario.exec(function (err, rows) {
            if (err) {
                return;
            }
            console.log(rows);
            console.log(userReq.pass);
            //console.log(rows);
            var tengo = rows[0] || "";
            var userReqHasheado = hash.sha256().update(userReq.pass).digest('hex');
            //console.log(userReq.pass);
            if (!userReq || userReqHasheado !== tengo.password) {
                //Pone un par clave valor en la cabecera de la respuesta:
                res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
                res.sendStatus(401);
                return;
            }

            next();

        });



    };

};
module.exports = auth;
