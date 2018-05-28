var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Korisnik = require('../models/Korisnik.js');

/* GET ALL USERS */

router.get('/show', function(req, res, next) {
  
  Korisnik.find(function (err, korisniks) {
    if (err) return next(err);
    res.json(korisniks);
  });
} 
);


/* SAVE USER */
router.post('/',  function(req, res, next) {
 
    Korisnik.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } 
);




module.exports = router;