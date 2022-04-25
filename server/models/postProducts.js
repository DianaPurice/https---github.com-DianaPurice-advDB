import mongoose from "mongoose";

const productShema = mongoose.Schema({
  title: String,
  category: String,
  description: String,
  seller: String,
  tags: [String],
  selectedFile: String,
  qtyAvailable: Number,
  qty: Number,
  price: Number,
  addedAt: {
    type: Date,
    default: new Date(),
  },
});

const PostProduct = mongoose.model("PostProduct", productShema);

export default PostProduct;
