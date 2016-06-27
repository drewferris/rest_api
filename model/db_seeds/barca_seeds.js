'use strict';

const mongoose = require('mongoose');
const Barca = require('../../model/barca_Player');

process.env.NODE_ENV = 'DEV';
if (process.env.NODE_ENV === 'TEST') mongoose.connect('mongodb://localhost/test_db');
if (process.env.NODE_ENV === 'DEV') mongoose.connect('mongodb://localhost/dev_db');

mongoose.connection.collections['barcas'].drop(function () {
  console.log('collection dropped');
});

new Barca({
  name: 'Neymar',
  position: 'Forward',
  number: 11,
  goals: 100
}).save((err, data) => {
  if (err) console.log(err);
  if (data) console.log('Barca ' + data.name + ' created');
});

new Barca({
  name: 'Saurez',
  position: 'Forward',
  number: 9,
  goals: 99

}).save((err, data) => {
  if (err) console.log(err);
  if (data) console.log('Barca ' + data.name + ' created');
});

new Barca({
  name: 'Messi',
  position: 'Forward',
  number: 10,
  goals: 98
}).save((err, data) => {
  if (err) console.log(err);
  if (data) console.log('Barca ' + data.name + ' created');
  mongoose.connection.close(function (data) {
    //if (cb) cb();
  });
});
