const express = require('express');
const {faker} = require('@faker-js/faker')

const router = express.Router();


//Usando las destructuracion
router.get('/categories/:categoryId/peoducts/:productId', (req,res) => {
  const { categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId
  });
})

module.exports = router;

