import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";

const getUsers = async () => {
  const users = await UserModel.find();
  return users;
};

const createUser = async (user: User) => {
  const userData = await UserModel.create(user)
  return userData;
}

export default {
  getUsers,
  createUser
};