import React from "react";
import { Link, useHistory } from "react-router-dom";

import { removeToken, isAuthenticated } from "../../localStorege/Auth";

const Header = () => {
  const user = isAuthenticated();
  const history = useHistory();
  const handelToken = () => {
    if (user) {
      const result = removeToken();
      if (result === "success") {
        console.log(user, "===>");
        history.push("/register");
      }
    } else {
      history.push("/register");
    }
  };
  return (
    <div className="sticky">
      <div className="container mx-auto grid grid-cols-3 grid-flow-col px-10 py-5">
        <div className="col-span-1 cursor-pointer">
          <Link to="/">
            <img src="images/logo.png" className="h-16" alt="" />
          </Link>
        </div>
        <div className="col-span-2 flex items-center ">
          <div className="flex-2">
            <ul className="flex space-x-10 ">
              <li className="flex-1 no-underline hover:underline cursor-pointer hover:text-yellow-800">
                <Link to="/">HOME</Link>
              </li>
              <li className="flex-1 no-underline hover:underline cursor-pointer hover:text-yellow-800">
                <Link to="/product">PRODUCT</Link>
              </li>
              <li className="flex-1 no-underline hover:underline cursor-pointer hover:text-yellow-800">
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="flex-1 no-underline hover:underline cursor-pointer hover:text-yellow-800">
                <Link to="/contact">CONTACT</Link>
              </li>
              <li className="flex-1 no-underline hover:underline cursor-pointer hover:text-yellow-800">
                <Link to="/cart">CART</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 text-center">
            <Link
              className="w-40 px-5 cursor-pointer hover:text-yellow-800"
              to="/login"
            >
              Log in
            </Link>
            <button
              onClick={() => handelToken()}
              className="w-40 px-5 cursor-pointer hover:text-yellow-800"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
