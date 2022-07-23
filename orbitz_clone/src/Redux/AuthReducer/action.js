import axios from "axios";
import * as types from "./actionType";
import { loadData } from "../../utils/localStorage";
const fghd = {
  name: "MASAI School",
  email: "hello@masai.com",
  password: "secret",
  username: "masai-school",
  mobile: "9876543210",
  description: "A Transformation in education!",
};
const pass = {
  username: "masai-school",
  password: "secret",
};
export const getRegister = (payload) => (dispatch) => {
  dispatch({ type: types.GET_USER_REQUEST });
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/register", fghd)
    .then((r) => {
      dispatch({ type: types.GET_USER_SUCCESS });

      return types.GET_USER_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.GET_USER_FAILURE });
      return types.GET_USER_FAILURE;
    });
};

export const getLogin = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/login", pass)
    .then((res) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });

      return types.LOGIN_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN_FAILURE });

      return types.LOGIN_FAILURE;
    });
};

export const logoutSuccess = () => (dispatch) => {
  dispatch({ type: types.LOGOUT_SUCCESS });
};

let token = loadData("token");
export const getUserDetails = (payload) => (dispatch) => {
  dispatch({ type: types.GET_USER_DETAILS_REQUEST });

  return axios
    .get(`https://masai-api-mocker.herokuapp.com/user/${payload}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      dispatch({ type: types.GET_USER_DETAILS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_USER_DETAILS_FAILURE });
    });
};
