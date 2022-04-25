import PostProduct from "../models/postProducts.js";

export const getProducts = async (req, res) => {
  try {
    const postProducts = await PostProduct.find();

    res.status(200).json(postProducts);
  } catch (error) {
    res.status(404).json({ message: "srv/controllers/posts.js getProducts" });
  }
};

export const createPost = async (req, res) => {
  const product = req.body;

  const newProduct = new PostProduct(product);
  try {
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: "svr/controllers/posts.js createPost" });
  }
};
