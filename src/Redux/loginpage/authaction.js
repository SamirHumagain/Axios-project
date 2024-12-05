import { login } from "../../getapi/getapi";
import { loginSuccess, loginFailure } from "./authslice";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await login({ username: email, password });
    localStorage.setItem("AccessToken", response.data.accessToken);
    localStorage.setItem("Email", response.data.email);
    localStorage.setItem("Name", response.data.firstName);
    localStorage.setItem("Image", response.data.image);
    localStorage.setItem("Username", response.data.username);

    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure("Login failed. Please check your credentials."));
  }
};
