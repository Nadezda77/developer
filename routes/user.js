var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Korisnik = require('../models/Korisnik');



/* SAVE BOOK */
router.post('/',  function(req, res) {
 
    Korisnik.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } 
);



module.exports = router;