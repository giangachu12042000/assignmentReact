import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

import { loginAction } from "../../actions/authAction";

const Login = () => {
  const [user, setUser] = useState(null);
  const [errors, setError] = useState(null);

  const dispatch = useDispatch();
  let history = useHistory();

  const handelChange = (e) => {
    const { value, name } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handelComfirm = (message) => {
    setError({
      ...errors,
      ["name"]: null,
      ["password"]: null,
    });
    if (message === "success") {
      history.push("/");
      Swal.fire(message);
    }
  };
  const handelSubmit = () => {
    if (user && !user["identifier"]) {
      console.log(user["name"], "==>");
      return setError({
        ...errors,
        ["name"]: "*can not empty",
      });
    }

    if (
      (user && user["identifier"] && user["identifier"].length < 2) ||
      (user && user["identifier"] && user["identifier"].length > 20)
    ) {
      return setError({
        ...errors,
        ["name"]:
          "*your name must greater than 2 characters and lest than 20 characters",
      });
    }

    if (user && !user["password"]) {
      return setError({
        ...errors,
        ["password"]: "*can not empty",
      });
    }
    if (user && !isNaN(user["password"]) === false) {
      return setError({
        ...errors,
        ["password"]: "*your pasword must a number",
      });
    }
    if (
      (user && user["password"] && user["password"].length < 8) ||
      (user && user["password"] && user["password"].length > 20)
    ) {
      return setError({
        ...errors,
        ["password"]:
          "*your pasword must have greater than 8 characters and less than 20 characters",
      });
    }
    if (!user) {
      return setError({
        ...errors,
        ["password"]: "*can not empty",
        ["name"]: "*can not empty",
      });
    }
    dispatch(loginAction({ user, cb: handelComfirm }));
  };
  return (
    <div>
      <div className="bg-gray-50 w-1/2 mx-auto h-auto py-4 px-4 rounded-md">
        <div>
          <label className="block py-2">
            <span className="text-gray-700 ">username</span>
            <input
              className="form-input bg-white mt-1 block w-full"
              type="text"
              placeholder="Your name"
              name="identifier"
              onChange={(e) => handelChange(e)}
            />
            <span className="text-red-700">{errors && errors.name}</span>
          </label>
          <label className="block py-2">
            <span className="text-gray-700">password</span>
            <input
              className="form-input bg-white mt-1 block w-full"
              type="password"
              name="password"
              placeholder="Your password"
              onChange={(e) => handelChange(e)}
            />
            <span className="text-red-700">{errors && errors.password}</span>
          </label>
          <button
            onClick={() => handelSubmit()}
            className="block my-4 bg-gray-800 bg-transparent mx-auto  text-xl font-bold text-gray-400 font-semibold hover:text-yellow-800 py-2 px-4 border border-blue hover:border-transparent rounded"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
