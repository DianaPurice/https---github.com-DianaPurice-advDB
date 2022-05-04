import express from "express";

import {
  commentPost,
  getPost,
  getPostsBySearch,
  getPostsByCreator,
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";
//USE .JS IN THE SERVER!!!

const router = express.Router();

router.get("/search", getPostsBySearch);
router.get("/creator", getPostsByCreator);
router.get("/", getPosts);
router.get("/:id", getPost);

router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);

router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);

export default router;
