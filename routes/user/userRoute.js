const express = require('express');
const router = express.Router();
const User = require('./User')


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('This Is Create User Page');
})
  ;
router.post('/create-user', function (req, res, next) {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  })
  newUser.save()
  res.status(200).json({ message: 'User created', user: newUser });
});

module.exports = router;
