'use strict';

const mongoose = require('mongoose');
const ManUnited = require('../../model/man_United_Player');

process.env.NODE_ENV = 'DEV';
if (process.env.NODE_ENV === 'TEST') mongoose.connect('mongodb://localhost/test_db');
if (process.env.NODE_ENV === 'DEV') mongoose.connect('mongodb://localhost/dev_db');

mongoose.connection.collections['manunitedplayers'].drop(function () {
  console.log('collection dropped');
});

new ManUnited({
  name: 'Rooney',
  position: 'Forward',
  number: 11,
  goals: 100
}).save((err, data) => {
  if (err) console.log(err);
  if (data) console.log('ManUnited ' + data.name + ' created');
});

new ManUnited({
  name: 'Scholes',
  position: 'Forward',
  number: 9,
  goals: 99

}).save((err, data) => {
  if (err) console.log(err);
  if (data) console.log('ManUnited ' + data.name + ' created');
});

new ManUnited({
  name: 'Ronaldo',
  position: 'Forward',
  number: 10,
  goals: 98
}).save((err, data) => {
  if (err) console.log(err);
  if (data) console.log('ManUnited ' + data.name + ' created');
  mongoose.connection.close(function (data) {
    //if (cb) cb();
  });
});
