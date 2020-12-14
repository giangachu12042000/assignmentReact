import React from "react";
import { apiEndPoint } from "../../utils/constant";
import { Link } from "react-router-dom";

const ProductV = ({
  products,
  handelAddTocart,
  handelParam,
  params,
  total,
}) => {
  const { page, _limit } = params;
  const lastPage = Math.ceil(total / 6);
  let array = [];
  for (let i = 0; i < lastPage; i++) {
    array.push(i);
  }
  return (
    <div className="container mt-5 py-5 mx-auto px-5">
      <div className="grid grid-cols-3">
        {products.length > 0
          ? products.map(({ id, name, image, price }, key) => {
              return (
                <div key={key} className="p-4 cursor-pointer ">
                  <Link to={`/products/detail/${id} `} className="">
                    <div className="overflow-hidden">
                      <img
                        src={image.map((item) => {
                          return `${apiEndPoint}${item.url}`;
                        })}
                        alt=""
                        className="transition duration-500 ease-in-out transform hover:scale-110"
                      />
                    </div>
                    <h1 className="text-center text-sm text-red-600 py-2">
                      {price}$
                    </h1>
                    <h1 className="text-center text-sm py-2">{name}</h1>
                  </Link>
                  <div className="flex">
                    <Link
                      to={`/buy/${id}/1 `}
                      className="py-2 px-5 block w-30 text-center mx-auto bg-transparent hover:bg-gray-800 text-blue-dark font-semibold hover:text-yellow-600 text-xs font-bold hover:border-transparent"
                    >
                      BUY NOW
                    </Link>
                    <button
                      onClick={() =>
                        handelAddTocart({ id, name, image, price })
                      }
                      className="py-2 px-5 block w-30 text-center mx-auto bg-transparent hover:bg-gray-800 text-blue-dark font-semibold hover:text-yellow-600 text-xs font-bold hover:border-transparent"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing
              <span className="font-medium mx-2">{page}</span>
              to
              <span className="font-medium mx-2">{_limit}</span>
              of
              <span className="font-medium mx-2">{total && total}</span>
              results
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                onClick={() => handelParam(page - 1)}
                disabled={page <= 1}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                {/* Heroicon name: chevron-left */}
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {array.map((item, key) => (
                <button
                  key={key}
                  onClick={() => handelParam(item)}
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  {Number(++item)}
                </button>
              ))}

              <button
                disabled={page >= lastPage}
                onClick={() => handelParam(page + 1)}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductV;
