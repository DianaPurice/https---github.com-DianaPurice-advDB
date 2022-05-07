import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import express from "express";
import Users from "../models/users.js";
import PostMessage from "../models/postProducts.js";

const router = express.Router();

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getUsersBySearch = async (req, res) => {
  const searchQuery = req.searchQuery;
  try {
    const id = new RegExp(searchQuery, "i");
    const accountType = new RegExp(searchQuery, "i");
    const users = await Users.find({
      $or: [{ id }, { accountType }],
    });
    res.json({ data: users });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createUser = async (req, res) => {
  const user = req.body;
  const hashedPassword = await bcrypt.hash(user.password, 12);
  const newUser = new Users({
    ...user,
    name: `${user.firstName} ${user.lastName}`,
    password: hashedPassword,
  });

  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateUser = async (req, res) => {
  const user = req.body;
  const id = user._id;
  const password = user.password;
  const hashedPassword = await bcrypt.hash(password, 12);
  console.log(user);
  const newUser = new Users({
    ...user,
    password: hashedPassword,
  });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No user with that id");
  const updatedUser = await Users.findByIdAndUpdate(
    id,
    { ...newUser, id },
    { new: true }
  );
  res.json(updatedUser);
};
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No user with that id");

  await Users.findByIdAndRemove(id);
  res.json({ message: "User deleted succesfully!" });
};

export default router;
