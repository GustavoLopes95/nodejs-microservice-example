const express = require('express');

const { createUser }  = require('../entities/user/use-cases');

const router = express.Router();

router.post('/',  async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    return res.send({ newUser });
  } catch(err) {
    if(err && err.code) {
      return res.status(err.code).send({ menssage: err.message });  
    }
    return res.status(400).send({ err, menssage: 'User registration fail !'});
  }
})

module.exports = app => app.use('/user', router);