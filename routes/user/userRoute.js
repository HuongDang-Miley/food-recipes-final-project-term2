const express = require('express');
const router = express.Router();
const User = require('./User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


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
    console.log('newUser', newUser)
    console.log('line24 ====')
    
    const jwtToken = await jwt.sign({email: newUser.email, _id: newUser._id}, 'thisIsASecretPassWord', {expiresIn: '1h'})
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
      jwtToken: jwtToken});
  }
  catch (e) {
    console.log('e', e)
    res.status(500).json({ message: e })
  }
});


module.exports = router;
