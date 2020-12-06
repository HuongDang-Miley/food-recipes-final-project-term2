const express = require('express');
const router = express.Router();
const User = require('./User')
const bcrypt = require('bcryptjs')


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('This Is Create User Page');
})

/* Create User */
router.post('/create-user', async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
    })
    newUser.save()
    res.status(200).json({ message: 'User created', user: newUser });
  }
  catch (e) {
    res.state(500).json({ message: e })
  }
});


module.exports = router;
