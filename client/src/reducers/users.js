import {
  FETCH_USER,
  FETCH_USERS,
  FETCH_USER_BY_SEARCH,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../constants/actionTypes";

export default (users = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      console.log(action);
      return action.payload;
    case FETCH_USER:
      return action.payload;
    case FETCH_USER_BY_SEARCH:
      return action.payload.data;
    case CREATE_USER:
      return [...users, action.payload];
    case UPDATE_USER:
      return users.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );
    case DELETE_USER:
      return users.filter((user) => user._id !== action.payload);
    default:
      return users;
  }
};
