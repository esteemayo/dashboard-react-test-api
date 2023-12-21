import { StatusCodes } from 'http-status-codes';

import { users } from '../dev-data/data/users.js';

export const getUser = async (req, res, next) => {
  const { id: userId } = req.params;

  const user = users.find((user) => user.id === parseInt(userId));
  return res.status(StatusCodes.OK).json(user);
};
