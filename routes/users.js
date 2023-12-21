import express from 'express';

import { getUser } from '../controllers/userController.js';

const router = express.Router();

router.route('/:id').get(getUser);

export default router;
