import express from 'express';

import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
} from '../controllers/userController.js';

const router = express.Router();

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getUser).delete(deleteUser);

export default router;
