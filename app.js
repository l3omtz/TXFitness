// --- BRING IN DEPENDACES --- //
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config  = require('./config/database');

const api = require('./routes/api');
const app = express();

const port = process.env.PORT || 3000;

// --- MONGOOSE --- //
mongoose.connect(config.database);
mongoose.connection.on('connected', () =>{
  console.log('Connection to mLab success!');
});
mongoose.connection.on('error', (err) =>{
  console.log('Connection: ' + err);
});

// --- MIDDLEWARE --- //
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use('/api', api);

// Start server on port
app.listen(port, () =>{
  console.log('Server started');
});
