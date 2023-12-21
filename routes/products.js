import express from 'express';

import {
  createProduct,
  getProduct,
  getProducts,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/').get(getProducts).post(createProduct);

router.route('/:id').get(getProduct);

export default router;
