import express from 'express';

import { createUser } from '../entities/user/use-cases';

const router = express.Router();

router.post('/',  async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    return res.send({ newUser });
  } catch(err) {
    console.log('err', err);
    if(err && err.code) {
      return res.status(err.code).send({ menssage: err.message });  
    }
    return res.status(400).send({ err, menssage: err});
  }
})

module.exports = app => app.use('/user', router);