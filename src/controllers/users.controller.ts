import { Request, Response } from 'express';
import usersService from '../services/users.service';
import { handleHttp } from "../utils/error.handle";

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await usersService.getUsers();
    res.send(users);
  } catch (error) {
    handleHttp(res, 500, "ERROR GET USERS");
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await usersService.createUser(req.body);
    res.send(user);
  } catch (error) {
    handleHttp(res, 500, "ERROR TO CREATE USERS");
  }
};

export default {
  getUsers,
  createUser
};
