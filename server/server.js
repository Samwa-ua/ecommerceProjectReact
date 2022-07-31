import express from 'express';
import dotenv from 'dotenv';
import connectDataBase from './config/MongoDB.js';
import importData from './DataImport.js';
import productRoute from './Routes/ProductRouts.js';
import { errorHandler, notFound } from './Middleware/Errors.js';

dotenv.config();
connectDataBase();

const app = express();

//API
app.use('/api/import', importData);
app.use('/api/products', productRoute);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}...`));
