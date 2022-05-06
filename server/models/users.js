import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
  userName: { type: String, requires: true },
  userEmail: { type: String, requires: true },
  userPassword: { type: String, requires: true },
  userId: { type: String },
  userAccountType: { type: Number, requires: true },
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
