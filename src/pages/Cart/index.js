import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { apiEndPoint } from "../../utils/constant";
import { getCarts, removeItemCart, findCount } from "../../localStorege/cart";

const CartV = () => {
  const [carts, setCart] = useState([]);
  const [idRemov, setIdRemove] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [id, setId] = useState(null);

  const changeRemove = (id) => {
    setIdRemove(id);
  };
  const comfirmRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.value) {
        removeItemCart(id);
        setCart(getCarts());
        Swal.fire("Deleted!", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };
  const handelQuantity = (e, id) => {
    const { value, name } = e.target;
    setQuantity(value);
    setId(id);
  };

  useEffect(() => {
    if (quantity) {
      findCount({ quantity, id });
    }
  }, [quantity]);
  console.log(quantity, "====>quantity");
  useEffect(() => {
    setCart(getCarts());
  }, [idRemov]);
  return (
    <div className="my-5 bg-gray-50">
      <h1 className="text-center text-yellow-800 py-5 text-lg">CART</h1>
      {carts &&
        carts.map(({ id, name, price, image }, key) => (
          <div className="px-15 py-5 my-5 border" key={key}>
            <div className="flex items-center">
              <div className="px-5">
                <svg
                  onClick={() => {
                    comfirmRemove(id);
                    changeRemove(id);
                  }}
                  className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 hover:text-red-500"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="flex-2 px-3">
                <img
                  src={image.map((item) => {
                    return `${apiEndPoint}${item.url}`;
                  })}
                  alt=""
                />
              </div>
              <div className="flex-1">
                <div className="flex">
                  <h1 className="text-center text-sm py-2 px-3 ">{name}</h1>
                  <h1 className="text-center text-sm py-2 px-3">
                    price: {price}$
                  </h1>
                  <Link
                    to={`/buy/${id}/${quantity}`}
                    className="py-2 px-5 block w-30 text-center mx-auto bg-transparent hover:bg-gray-800 text-blue-dark font-semibold hover:text-yellow-600 text-xs font-bold hover:border-transparent"
                  >
                    BUY NOW
                  </Link>
                  <div className="px-5">
                    <label htmlFor="">quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      className="border-b-2 mx-2"
                      defaultValue={quantity}
                      onChange={(e) => handelQuantity(e, id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CartV;
