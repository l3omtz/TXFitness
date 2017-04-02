const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const config = require('../../config/database');

// --- MONOGO --- //
const mongojs = require('mongojs');
const db = mongojs('mongodb://admin:admin@ds155428.mlab.com:55428/tiktalk2go', ['users']);

// Get all users
// router.get('/user', (req, res, next) =>{
//   db.users.find((err, users) => {
//     if(err){
//       res.send(err);
//     }
//     res.json(users);
//   });
// });

// Show single user
router.get('/user/:id', (req, res, next) =>{
  db.users.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, user) =>{
    if(err){
      res.send(err);
    }
    res.json(user);
  });
});

// Create user with hash password
router.post('/user/create', (req, res, next) =>{
  // Get user from form
  var user = req.body;

  // Hash the Password using bcrypt
  bcrypt.genSalt(10, (err, salt) =>{
    // Call in password from the new user
    bcrypt.hash(user.password, salt, (err, hash) =>{
      if(err) throw err;

      // user password to hash
      user.password = hash;

      // Save user to db with hash password
      db.users.save(user, (err, user) =>{
        if (err){
          res.send(err);
        }
        res.json(user);
      });

    });
  });
});

// Authenticate user login with password
router.post('/user/authenticate', (req, res, next) =>{
  // a. Get username that was submited from form
  const username = req.body.username;
  // b. Get password that was submited from form
  const password = req.body.password;
  const query = {username: username} // <- Query username of username

  // c. Get user by the username
  db.users.find(query, (err, user) =>{
    if(err) throw err; // <- If thers an error return error
    if(!user[0]) // <- If theres not a user that was inputed from form return not found message
      return res.send({success: false});

    // ELSE If user IS FOUND compare password that was inputed with the hash passowrd return from callback(err, user)
    bcrypt.compare(password, user[0].password, (err, isMatch) =>{
      if (err) throw err;

      if(isMatch){
        // If passwords match create token with jwt.sign() function
        const token = jwt.sign(user[0], config.secret, { // <- taken in the user object and the secret form congif
          expiresIn:604800 // 1 week in sec - how long token is good for, then logs out after time expires
        });

        //  Our respose to our front end so profile data can be displayed
        res.json({
          success: true,
          token: 'JWT ' +token,  // <- Send token because user was able to login
          user:{                // <- Building own user object so password wont be sent back
            id: user[0]._id,
            name: user[0].name,
            username: user[0].username,
            email: user[0].email
          }
        });
      }else{
        return res.json({success: false});
      }
    });
  });
});


// This route will be our auth token page -- and shows profile info -- passport.authenticate('jwt', {session:false}),
router.get('/user', passport.authenticate('jwt', {session:false}), (req, res) => {
  res.json({user: req.user});
});


// Delete User
router.delete('/user/:id', (req, res, next) => {
  db.users.remove({_id: mongojs.ObjectId(req.params.id)},(err, user) => {
    if(err){
      res.send(err);
    }
    res.json(user);
  });
});

// Update
router.put('/user/:id', (req, res, next) => {
  var user = req.body;
  var updateUser = {};

  if(user.isDone){
    updateUser.isDone = user.isDone;
  }
  if(user.title){
    updateUser.title = user.title;
  }

  if(!updateUser){
    res.status(4004);``
    res.json({
      "error" : "Bad data"
    })
  }else{
    db.users.update({_id: mongojs.ObjectId(req.params.id)},updateUser, {} ,(err, user) => {
      if(err){
        res.send(err);
      }
      res.json(user);
    });
  }

});


module.exports = router;
