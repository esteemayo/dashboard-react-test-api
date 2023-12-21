import express from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import 'colors';

import userRoute from './routes/users.js';
import productRoute from './routes/products.js';

const app = express();

app.use(cors());
app.options('*', cors());

if (app.get('env') === 'development') {
  app.use(morgan('dev'));
}

const limiter = rateLimit({
  max: 100,
  windowMs: 30 * 60 * 1000,
  message: 'Too many request from this IP, Please try again in 30 minutes',
});

app.use('/api', limiter);

app.use(express.json({ limit: '10kb' }));

app.use(compression());

app.use('/api/v1/users', userRoute);
app.use('/api/v1/products', productRoute);

export default app;
