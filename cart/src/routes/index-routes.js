const express = require('express');
const { route } = require('../app');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'Cart service',
    version: '1.0.0'
  });
});

module.exports = router;