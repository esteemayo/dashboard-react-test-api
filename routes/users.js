import express from 'express';

import {
  createUser,
  deleteUser,
  getUser,
} from '../controllers/userController.js';

const router = express.Router();

router.route('/').post(createUser);

router.route('/:id').get(getUser).delete(deleteUser);

export default router;
