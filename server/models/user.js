import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, requires: true },
  email: { type: String, requires: true },
  password: { type: String, requires: true },
  id: { type: String },
  accountType: { type: Number, requires: true },
});

export default mongoose.model("User", userSchema);
