var mongoose = require('mongoose');

var Korisnik = new mongoose.Schema({
    firstname: String,
    lastname: String,
    streetnumber: String,
    city: String,
    country: String,
  });

  module.exports = mongoose.model('Korisnik', Korisnik);