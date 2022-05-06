import { combineReducers } from "redux";
import products from "./products";
import auth from "./auth";
import users from "./users";

export default combineReducers({
  posts: products,
  auth,
  users: users,
});
