import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchCategories,
  findcategoryById,
} from "../../actions/categoryAction";
import { filterProductByPrice } from "../../actions/productAction";

import Cart from "../Cart";
import Search from "../Search";

const SideBar = () => {
  const [openCate, setopenCate] = useState(1);
  const [openCateCart, setopenCart] = useState(1);
  const [categoryId, setCategoryId] = useState(null);
  const [filter, setFilter] = useState("null");
  const categories = useSelector((state) => state.categories.categories);

  const dispatch = useDispatch();

  const handleCoutCate = (param) => {
    const count = parseInt(openCate) + param;
    setopenCate(count);
  };

  const handelFilter = (e) => {
    const { value, name } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  // submit
  const handelFilterPrice = () => {
    dispatch(filterProductByPrice(filter));
  };

  const handleCoutCart = (param) => {
    const count = parseInt(openCateCart) + param;
    setopenCart(count);
  };

  const handelCategory = (id) => {
    setCategoryId(id);
  };

  useEffect(() => {
    if (categoryId !== null) {
      dispatch(findcategoryById(categoryId));
    }
  }, [categoryId]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="my-5 mx-5">
      <Search />

      <div className="bg-gray-100 mx-auto h-auto py-4 px-4 rounded-md">
        <h1 className="text-center">Tìm kiếm sảm phẩm trong khoảng giá</h1>
        <div>
          <label className="block py-2">
            <input
              className="form-input bg-white mt-1 block w-full"
              type="number"
              name="lt"
              onChange={(e) => handelFilter(e)}
              placeholder="giá thất nhất"
            />
          </label>
          <label className="block py-2">
            <input
              className="form-input bg-white mt-1 block w-full"
              type="number"
              name="gt"
              onChange={(e) => handelFilter(e)}
              placeholder="giá cao nhất"
            />
          </label>
          {/* <div className="grid justify-self-auto py-4 "> */}
          <button
            onClick={() => handelFilterPrice()}
            className="block my-4 bg-gray-800 bg-transparent mx-auto  text-xl font-bold text-yellow-800 font-semibold hover:text-gray-100 py-2 px-4 border border-blue hover:border-transparent rounded"
          >
            Lọc giá
          </button>
          {/* </div> */}
        </div>
      </div>
      <div className="bg-gray-50 my-5">
        <div className="p-5" onClick={() => handleCoutCate(1)}>
          <h1 className="text-center text-yellow-800 text-lg">DANH MỤC</h1>
        </div>
        <ul className="">
          {categories.length > 0 ? (
            categories.map(({ id, name }, key) => {
              return (
                <li
                  key={key}
                  onClick={() => handelCategory(id)}
                  className="py-3 cursor-pointer text-sm text-yellow-800 hover:text-yellow-600 px-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-102"
                >
                  - {name.toUpperCase()}
                </li>
              );
            })
          ) : (
            <div> Chưa có danh muc</div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
