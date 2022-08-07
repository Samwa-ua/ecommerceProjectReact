import express from 'express';
import dotenv from 'dotenv';
import connectDataBase from './config/MongoDB.js';
import importData from './DataImport.js';
import productRouter from './Routes/ProductRoutes.js';
import { errorHandler, notFound } from './Middleware/Errors.js';
import userRouter from './Routes/UserRoutes.js';
import orderRouter from './Routes/OrderRoutes.js';
import cors from 'cors';

dotenv.config();
connectDataBase();

const app = express();
app.use(express.json());
app.use(cors());

//API
app.use('/api/import', importData);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

//Error handlers
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}...`));
