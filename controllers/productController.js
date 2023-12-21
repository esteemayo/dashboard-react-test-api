import { StatusCodes } from 'http-status-codes';

import { products } from '../dev-data/data/products.js';

export const getProducts = (req, res, next) => {
  return res.status(StatusCodes.OK).json(products);
};
