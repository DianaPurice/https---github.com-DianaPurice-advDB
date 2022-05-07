import * as api from "../api";
import {
  FETCH_USER,
  FETCH_USER_BY_SEARCH,
  FETCH_USERS,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../constants/actionTypes";
// new
export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.getUser(id);
    dispatch({ type: FETCH_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();
    dispatch({ type: FETCH_USERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getUsersBySearch = (searchQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.getUsersBySearch(searchQuery);
    dispatch({ type: FETCH_USER_BY_SEARCH, payload: { data } });
  } catch (error) {
    console.log(error);
  }
};
export const createUser = (user) => async (dispatch) => {
  console.log(user);
  try {
    const { data } = await api.createUser(user);
    window.location.reload();
    dispatch({ type: CREATE_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateUser = (id, user) => async (dispatch) => {
  try {
    const data = await api.updatePost(id, user);
    dispatch({ type: UPDATE_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);
    dispatch({ type: DELETE_USER, payload: id });
    window.alert("worket");
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetails = (id) => async (dispatch) => {
  try {
    const { data } = await api.getUser(id);

    return data;
  } catch (error) {
    console.log(error);
  }
};
