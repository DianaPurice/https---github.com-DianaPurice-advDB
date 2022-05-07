import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
  name: { type: String, requires: true },
  email: { type: String, requires: true },
  password: { type: String, requires: true },
  userId: { type: String },
  accountType: { type: Number, requires: true },
  userPosts: {
    type: Object,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Users = mongoose.model("Users", usersSchema);

export default Users;
