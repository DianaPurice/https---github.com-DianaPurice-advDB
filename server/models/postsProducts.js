import mongoose from "mongoose";

const productShema = mongoose.Schema({
  tile: String,
  category: String,
  description: String,
  seller: String,
  tags: [String],
  selectedFile: String,
  qtyAvailable: Number,
  qty: Number,
  addedAt: {
    type: Date,
    default: new Date(),
  },
});
