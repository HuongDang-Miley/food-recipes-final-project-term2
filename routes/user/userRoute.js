const express = require('express');
const router = express.Router();
const User = require('./User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { default: Axios } = require('axios');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('This Is Create User Page');
})

/* Create User */
router.post('/create-user', async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const newUser = await new User({
      email: req.body.email,
      password: hashedPassword,
    })
    
    console.log('before save ====')
    await newUser.save()
    console.log('after save ====')
    console.log('newUser after save', newUser)

    const jwtToken = await jwt.sign({ email: newUser.email, _id: newUser._id }, 'thisIsASecretPassWord', { expiresIn: '1h' })
    // const token = jwt.sign({email: foundEmail.email, _id: foundEmail._id}, "thisIsASecretCode", {expiresIn: '1h'})
    console.log('line27 ====')
    console.log('jwtToken', jwtToken)

    // res.status(200).send({ 
    //   message: 'Do you fucking see this text?'});

    res.status(200).json({
      message: 'User created',
      email: newUser.email,
      password: newUser.password,
      _id: newUser._id,
      jwtToken: jwtToken
    });
  }
  catch (e) {
    if (e.code === 11000) {
      res.status(409).json({ message: "Email Already Exists, Please Login." , error: e})
    } else {
      res.status(500).json({ message: "Server Error", error: e})   
    }
    // console.log('e', e)
    // console.log('e code 11000', e.code)
    // res.status(500).json({ message: e })
  }
});

// Login 
router.post('/login', async (req, res, next) => {
  try {
    let foundUser = await User.findOne({ email: req.body.email })
    // console.log('body email', req.body.email)
    if (!foundUser) {
      // console.log('Not found loginUser', foundUser)
      res.status(400).json({ message: 'Email Not Found! Please Try Again Or Register' })
    } else {
      // console.log('found loginUser', foundUser)
      let comparePassword = await bcrypt.compare(req.body.password, foundUser.password)
      // console.log('comparePassword', comparePassword)
      if (comparePassword) {
        // console.log('comparePassword is true:', comparePassword)
        const jwtToken = await jwt.sign({ email: foundUser.email, _id: foundUser._id }, 'thisIsASecretPassWord', { expiresIn: '1h' })
        // console.log('jwtToken', jwtToken)
        res.status(200).json({
          message: 'Login Successfully',
          email: foundUser.email,
          password: foundUser.password,
          _id: foundUser._id,
          jwtToken: jwtToken
        })
      }
    }
  }
  catch (e) {
    res.status(500).json({ severError: e, message: 'Server Error! Please Comeback Later' })
  }
})


module.exports = router;
