import * as types from "./actionType"
import { saveData, loadData } from "../../utils/localStorage";

const inialState = {
  isAuth: loadData("isAuth") || false,
  token: loadData("token") || "",
  isLoading: false,
  isError: false,
  isRegister: false,
  userDetails: loadData("dataUser") || [],
};
export const reducer = (state = inialState, { type, payload }) => {
  switch (type) {
    case types.GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isRegister: true,
      };
    case types.GET_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      saveData("token", payload);
      saveData("isAuth", true);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.LOGOUT_SUCCESS:
      saveData("token", "");
      saveData("isAuth", false);
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
      };

    case types.GET_USER_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_USER_DETAILS_SUCCESS:
      saveData("dataUser", payload);
  
      return {
        ...state,
        isLoading: false,
        userDetails: payload,
      };
    case types.GET_USER_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        userDetails: "",
        isError: true,
      };

    default:
      return state;
  }
};
