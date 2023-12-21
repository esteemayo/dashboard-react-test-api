import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.options('*', cors());

if (app.get('env') === 'development') {
  app.use(morgan('dev'));
}

export default app;
