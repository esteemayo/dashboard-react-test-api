import { StatusCodes } from 'http-status-codes';

import { users } from '../dev-data/data/users.js';

export const getUsers = (req, res, next) => {
  return res.status(StatusCodes.OK).json(users);
};

export const getUser = (req, res, next) => {
  const { id: userId } = req.params;

  const user = users.find((user) => user.id === parseInt(userId));
  return res.status(StatusCodes.OK).json(user);
};

export const createUser = (req, res, next) => {
  users.unshift({ ...req.body });

  return res.status(StatusCodes.CREATED).json(users);
};

export const deleteUser = (req, res, next) => {
  const { id: userId } = req.params;

  users.filter((user) => user.id !== parseInt(userId));

  return res.status(StatusCodes.OK).json('User deleted!');
};
