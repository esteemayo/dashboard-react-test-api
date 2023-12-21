import express from 'express';

import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/').get(getProducts).post(createProduct);

router.route('/:id').get(getProduct).delete(deleteProduct);

export default router;
