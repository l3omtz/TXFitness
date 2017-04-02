// --- BRING IN DEPENDACES --- //
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const api = require('./app/routes/api');
const app = express();

const port = process.env.PORT || 8080;


// --- MIDDLEWARE --- //
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start server on port
app.listen(port, () =>{
  console.log('Server started');
});
