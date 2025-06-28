import User from '../models/user.js';

export const createUserService = (body) => User.create(body);

export const findAllUserService = () => User.find();

export const findUserByIdService = (id) => User.findById(id);

export const updateUserService = (id, body) => User.findOneAndUpdate({_id: id}, body);

export const setHairByIdService = (id,infos) =>User.findOneAndUpdate({_id:id},infos)
