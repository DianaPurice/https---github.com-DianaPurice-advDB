import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

//action creator: function that returns an aasync function with a dispatch
export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    switch (error.response.status) {
      case 404:
        window.alert("User dosen't exists!");
        break;
      case 400:
        window.alert("Wrong password!");
        break;
      default:
        window.alert(error);
        break;
    }
  }
};
export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    switch (error.response.status) {
      case 400:
        window.alert(
          "Something dosen't seem right!\nPlease check your details and try again!"
        );
        break;
      default:
        window.alert(error);
        break;
    }
  }
};
