import express from 'express';

import { createUser, getUser } from '../controllers/userController.js';

const router = express.Router();

router.route('/').post(createUser);

router.route('/:id').get(getUser);

export default router;
