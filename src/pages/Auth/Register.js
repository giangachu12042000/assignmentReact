import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

import { register } from "../../actions/authAction";

const Register = () => {
  const [user, setUser] = useState(null);
  const [errors, setError] = useState(null);

  let history = useHistory();

  const dispatch = useDispatch();

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
  console.log(user, "==>user");
  const handelSubmit = () => dispatch(register({ user, cb: handelComfirm }));
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
              name="username"
              onChange={(e) => handelChange(e)}
            />
          </label>
          <label className="block py-2">
            <span className="text-gray-700">email</span>
            <input
              className="form-input bg-white mt-1 block w-full"
              type="email"
              name="email"
              placeholder="Your password"
              onChange={(e) => handelChange(e)}
            />
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
          </label>

          <button
            onClick={() => handelSubmit()}
            className="block my-4 bg-gray-800 bg-transparent mx-auto  text-xl font-bold text-gray-400 font-semibold hover:text-yellow-800 py-2 px-4 border border-blue hover:border-transparent rounded"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
