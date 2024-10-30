import * as userModel from '../models/userModel';

export const getAllUsers = async () => {
  return await userModel.getAllUsers();
};

export default { getAllUsers };