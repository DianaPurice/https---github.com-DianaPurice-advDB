import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: { type: String, requires: true },
  category: { type: String, requires: true },
  creator: String,
  description: String,
  seller: { type: String, requires: true },
  tags: [String],
  selectedFile: { type: String, requires: true },
  qty: { type: String, requires: true },
  price: { type: String, requires: true },
  addedAt: {
    type: Date,
    default: new Date(),
  },
  editedAt: {
    type: Date,
    default: new Date(),
  },
  addQty: {
    type: [String],
    default: [],
  },
  comments: {
    type: [String],
    default: [],
  },
});

const PostProduct = mongoose.model("PostProduct", postSchema);

export default PostProduct;
