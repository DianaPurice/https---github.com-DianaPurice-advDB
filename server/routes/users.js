import express from "express";
import auth from "../middleware/auth.js";
import {
  getUser,
  getUsersBySearch,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const router = express.Router();
//router.get("/", (req, res) => res.send("this works"));
router.get("/search", getUsersBySearch);
router.get("/", getUsers);
router.get("/:id", getUser);

router.post("/", auth, createUser);
router.patch("/:id", auth, updateUser);

router.delete("/delete/:id", auth, deleteUser);

export default router;
