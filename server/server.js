import express from 'express';
import dotenv from 'dotenv';
import products from './data/Products.js';
import connectDataBase from './config/MongoDB.js';
import importData from './DataImport.js';
import productRoute from './Routes/ProductRouts.js';

dotenv.config();
connectDataBase();

const app = express();

//API

app.use('/api/import', importData);
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}...`));

// //Fetch products from mockdata
// app.get('/api/products', (req, res) => {
//   res.json(products);
// });

// //Fetch single product from mockdata
// app.get('/api/products/:id', (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });
