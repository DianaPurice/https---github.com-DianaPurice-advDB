import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

//action creator: function that returns an aasync function with a dispatch
export const signin = (formData, navigate) => async (dispatch) => {
  try {
    // log in the user
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error);
    // check if the error is 400 => window.alert("wrong pass");
    // OR 404 => window.alert("user dosen't exists")
  }
};
export const signup = (formData, navigate) => async (dispatch) => {
  try {
    // log in the user
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    navigate.push("/");
  } catch (error) {
    console.log(error);
  }
};
