'use strict';

const mongoose = require('mongoose');

const BarcaPlayer = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('barca', BarcaPlayer);
