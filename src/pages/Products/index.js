import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import queryString from "query-string";

import ProductV from "./ProductV";
import { Cart } from "../../localStorege/cart";
import Swal from "sweetalert2";

import { fetchProducts, countProduct } from "../../actions/productAction";

const Product = () => {
  const dispatch = useDispatch();
  const hisStory = useHistory();
  const location = useLocation();
  const [params, setParam] = useState({ page: 1, _limit: 6 });
  const { products, total } = useSelector((state) => state.products);

  const handelParam = (params) => {
    setParam({
      ...params,
      page: params,
      _limit: 6,
    });
  };
  const handelAddTocart = (item) => {
    Cart({ item, cb: checkProduct });
  };

  const checkProduct = () => {
    Swal.fire("Sảm phẩm đã tồn tại trong giỏ hàng");
  };

  useEffect(() => {
    dispatch(fetchProducts(params));
    const currentPath = location.pathname;
    const query = queryString.stringify(params);
    const url = `${currentPath}?${query}`;
    hisStory.push(url);
    window.scrollTo(0, 0);
  }, [params]);

  useEffect(() => {
    dispatch(countProduct());
    dispatch(fetchProducts(params));
  }, []);

  return (
    <div>
      <ProductV
        products={products}
        handelAddTocart={handelAddTocart}
        handelParam={handelParam}
        params={params}
        total={total}
      />
    </div>
  );
};

export default Product;
