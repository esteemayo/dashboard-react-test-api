import { StatusCodes } from 'http-status-codes';

import { products } from '../dev-data/data/products.js';

export const getProducts = (req, res, next) => {
  return res.status(StatusCodes.OK).json(products);
};

export const getProduct = (req, res, next) => {
  const { id: productId } = req.params;

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  return res.status(StatusCodes.OK).json(product);
};

export const createProduct = (req, res, next) => {
  const product = products.push({ ...req.body });

  return res.status(StatusCodes.CREATED).json(product);
};
