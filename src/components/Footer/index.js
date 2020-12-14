import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100 px-5 py-20">
      <div className="flex justify-center bg-white py-5">
        <div className="px-10">
          <img src="images/american-express-2.jpg" alt="" />
        </div>
        <div className="px-10">
          <img src="images/visa-2.jpg" alt="" className="" />
        </div>
        <div className="px-10">
          <img src="images/discovery-2.jpg" alt="" />
        </div>
        <div className="px-10">
          <img src="images/eheck-2.jpg" alt="" />
        </div>
        <div className="px-10">
          <img src="images/american-express-2.jpg" alt="" />
        </div>
        <div className="px-10">
          <img src="images/american-express.jpg" alt="" />
        </div>
      </div>
      {/* <div className="bg-white rounded my-5 py-5">
        <h1 className="text-yellow-800 py-5 text-center text-3xl">
          Contac with us
        </h1>
        <div className="bg-gray-50 w-1/2 mx-auto h-auto py-4 px-4 rounded-md">
          <div>
            <label className="block py-2">
              <span className="text-gray-700 ">Name</span>
              <input
                className="form-input bg-white mt-1 block w-full"
                type="text"
                placeholder="Your name"
              />
            </label>
            <label className="block py-2">
              <span className="text-gray-700">Name</span>
              <input
                className="form-input bg-white mt-1 block w-full"
                type="email"
                placeholder="Your email"
              />
            </label>
            <label className="block py-2">
              <span className="text-gray-700">Textarea</span>
              <textarea
                className="form-textarea mt-1 block w-full rounded-md"
                rows="3"
                placeholder="Enter some long form content."
              ></textarea>
            </label>
            <button className="block my-4 bg-gray-800 bg-transparent mx-auto  text-xl font-bold text-gray-400 font-semibold hover:text-yellow-800 py-2 px-4 border border-blue hover:border-transparent rounded">
              Submit
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
