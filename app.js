import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import userRoute from './routes/users.js';
import productRoute from './routes/products.js';

const app = express();

app.use(cors());
app.options('*', cors());

if (app.get('env') === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/users', userRoute);
app.use('/api/v1/products', productRoute);

export default app;
