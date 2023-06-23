const express = require('express');
const {faker} = require('@faker-js/faker')

const router = express.Router();

router.get('/users',(req,res) => {
  const limit = req.query.limit;
  const offset = req.query.offset;
  if(limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros')
  }
 })

 module.exports = router;
