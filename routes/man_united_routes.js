'use strict';

const express = require('express');
const bodyParser = require('body-parser').json();
const ManUnitedPlayer = require('../model/man_United_Player');
const jwtAuth = require('../lib/jwt_auth');

const router = module.exports = exports = express.Router();

router.get('/', (req, res) => {
  ManUnitedPlayer.find({}, (err,data) => {
    if(err) return res.json({
      message: err.message
    });
    res.json(data);
  });
});

router.post('/', bodyParser, jwtAuth, (req, res) => {
  let newManUnitedPlayer = new ManUnitedPlayer(req.body);
  newManUnitedPlayer.save((err, data) => {
    if(err) return res.json({
      message: err.message
    });
    res.json(data);
  });
});

router.put('/', bodyParser, jwtAuth, (req, res, next) => {
  let _id = req.body._id;
  ManUnitedPlayer.findOneAndUpdate({_id}, req.body, (err) => {
    if(err) return next(err);
    let message = 'successfully updated';
    res.json({message});
  });
});

router.delete('/:id', bodyParser, jwtAuth, (req, res, next) => {
  let _id = req.params.id;
  ManUnitedPlayer.findOneAndRemove({_id}, null, (err) => {
    if(err) return next(err);
    let message = 'successfully deleted';
    res.json({message});
  });
});
