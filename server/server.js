import express from 'express';
import products from './data/Products.js';

const PORT = 5000;

const app = express();

//Fetch products from mockdata
app.get('/api/products', (req, res) => {
  res.json(products);
});

//Fetch single product from mockdata
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, console.log(`server running on port ${PORT}...`));
