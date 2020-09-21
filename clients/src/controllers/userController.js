const express = require('express');

const UserModel = require('../models/user');

const router = express.Router();

router.post('/',  async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if(UserModel.findOne({ email })) throw { code: 400, message: `The user with email ${email} already exists`};

    const newUser = await UserModel.create({ name, email, password });
    newUser.password = undefined;

    return res.send({ newUser });
  } catch(err) {
    if(err && err.code) {
      return res.status(err.code).send({ menssage: err.message });  
    }
    return res.status(400).send({ err, menssage: 'User registration fail !'});
  }
})

module.exports = app => app.use('/user', router);