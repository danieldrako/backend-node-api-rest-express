const express = require('express');
const app =  express();
const port = 3000;

app.get('/', (req,res) => {
  res.send('Hola mi server con express')
 })
app.get('/nueva-ruta', (req,res) => {
  res.send('Hola este es un nuevo endpoint')
 })
app.get('/products', (req,res) => {
  res.json({
    name: 'Producto 1',
    price: 1000
  })
 })

 app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  })
