const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
// const config = require('../config/database');

router.get('/', (req, res, next) =>{
  res.send('works');
});

module.exports = router;
