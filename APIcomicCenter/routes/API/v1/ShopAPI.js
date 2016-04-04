"use strict";

var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var Usuario = mongoose.model('Usuario');
var Item = mongoose.model('Item');
router.get('/', function(req, res, next) {
  res.send('Hola Soy tu API');
});

router.get('/users', function (req, res, next) {
    var sort = req.query.sort || 'name';
    Usuario.list(sort, function (err, rows) {
        if (err) {
            res.status(400).json({
                result: false,
                status: 'Bad Request',
                err: err
            });
        }
        res.status(200).json({
            result: true,
            status: 'OK',
            usuarios: rows
        });
    });
});

router.get('/items', function (req, res, next) {
    var sort = req.query.sort || 'titulo';
    Item.list(sort, function (err, rows) {
        if (err) {
            res.status(400).json({
                result: false,
                status: 'Bad Request',
                err: err
            });
        }
        res.status(200).json({
            result: true,
            status: 'OK',
            items: rows
        });
    });
});

router.post('/users', function (req, res) {
    var user = new Usuario(req.body);
    //guardamos usuario en la BD:
    user.save(function (err, newUser) {
        if (err) {
            res.status(400).json({
                result: false,
                status: 'Bad Request',
                err: err
            });
            return;
        }
        res.status(200).json({
            result: true,
            status: 'OK',
            usuario: newUser
        });
    });

});

module.exports = router;