import { REGISTER, LOGIN } from "../constans/type";
import { loginApi, registerApi } from "../api/AuthApi";
import { token } from "../localStorege/Auth";

function getRegister(data) {
  return {
    type: REGISTER,
    payload: data,
  };
}

function getLogin(data) {
  return {
    type: LOGIN,
    payload: data,
  };
}

export const register = ({ user, cb }) => {
  return async (dispatch) => {
    try {
      const data = await registerApi(user);
      if (data) {
        const { jwt, user } = data;
        token(jwt);
        cb("success");
        dispatch(getRegister(user));
      }
    } catch (err) {
      throw err;
    }
  };
};

export const loginAction = ({ user, cb }) => {
  return async (dispatch) => {
    try {
      const data = await loginApi(user);
      if (data) {
        const { jwt, user } = data;
        token(jwt);
        cb("success");
        dispatch(getLogin(user));
      }
    } catch (err) {
      cb("submit error");
      throw err;
    }
  };
};
