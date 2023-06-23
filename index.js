const express = require('express');
const {faker} = require('@faker-js/faker')

const app =  express();
const port = 3000;

app.get('/', (req,res) => {
  res.send('Hola mi server con express')
 })

app.get('/nueva-ruta', (req,res) => {
  res.send('Hola este es un nuevo endpoint')
 })

app.get('/products', (req,res) => {
  const products = [];
  const {size} = req.query;
  const limit = size || 10
  for(let index = 0; index < limit; index++ ){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.url(),
    })
  }
  res.json(products);
});

 app.get('/products/:id', (req,res) => {
    const id = req.params.id;
    res.json({
      id,
      name: 'Product 2',
      price: 2000
    })
  })

  app.get('/users',(req,res) => {
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
//Usando las destructuracion
 app.get('/categories/:categoryId/peoducts/:productId', (req,res) => {
    const { categoryId, productId} = req.params;
    res.json({
      categoryId,
      productId
    });
  })

 app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  })
