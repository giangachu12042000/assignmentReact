import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { apiEndPoint } from "../../utils/constant";
import { getProductById } from "../../actions/productAction";
import { getCarts, removeItemCart, findCount } from "../../localStorege/cart";

const BuyProduct = () => {
  const [CountQuantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.products);

  const { id, quantity } = useParams();

  const handelQuantity = (e, id) => {
    const { value, name } = e.target;
    setQuantity(value);
  };

  useEffect(() => {
    setQuantity(quantity);
    dispatch(getProductById(id));
  }, []);
  return (
    <div className="my-5 bg-gray-50">
      <h1 className="text-center text-yellow-800 py-5 text-lg">Buy Product</h1>

      <div className="px-15 py-5 my-5 border">
        <div className="flex items-center">
          <div className="flex-2 px-3">
            <img
              src={
                product &&
                product.image.map((item) => {
                  return `${apiEndPoint}${item.url}`;
                })
              }
              alt=""
            />
          </div>
          <div className="flex-1">
            <div className="flex">
              <h1 className="text-center text-sm py-2 px-3 ">
                {product && product.name}
              </h1>
              <h1 className="text-center text-sm py-2 px-3">
                price: {product && product.price}$
              </h1>
              <div className="px-5">
                <label htmlFor="">quantity</label>
                <input
                  type="number"
                  name="quantity"
                  className="border-b-2 mx-2 py-1 text-center"
                  defaultValue={quantity}
                  onChange={(e) => handelQuantity(e)}
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-200 px-5 py-5 mx-20">
            <p>
              Total:{" "}
              {product ? Number(CountQuantity) * Number(product.price) : null} $
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;
