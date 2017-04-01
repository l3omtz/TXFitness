const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

// --- MONOG) --- //
const mongojs = require('mongojs');
const db = mongojs('mongodb://admin:admin@ds155428.mlab.com:55428/tiktalk2go', ['users']);

router.get('/users', (req, res, next) =>{
  db.users.find((err, users) => {
    if(err){
      res.send(err);
    }
    res.json(users);
  });
});



module.exports = router;
