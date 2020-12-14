import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProductById } from "../../../actions/productAction";
import { apiEndPoint } from "../../../utils/constant";

const Detail = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);
  return (
    <div className="grid grid-cols-2 py-10">
      <div className="flex justify-center">
        <img
          src={
            product &&
            product.image &&
            product.image.map((item) => {
              return `${apiEndPoint}${item.url}`;
            })
          }
          alt=""
        />
      </div>
      <div className="pr-40">
        <h1 className="text-center py-5 text-xl font-bold hover:text-yellow-800">
          {product && product.name}
        </h1>
        <p className="text-center text-red-600 py-5 text-xl font-bold hover:text-yellow-800">
          {product && product.price}$
        </p>
        <button className="block text-center mx-auto bg-transparent text-white w-full bg-gray-800 text-blue-dark font-semibold hover:text-yellow-600 text-sm font-bold py-1 hover:border-transparent rounded py-3">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Detail;
