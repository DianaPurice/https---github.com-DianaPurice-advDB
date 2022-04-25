import express from "express";
import { getProducts, createPost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createPost);

export default router;
