import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { searchProductByName } from "../../actions/productAction";

const Search = () => {
  const [search, setSearch] = useState(null);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };
  useEffect(() => {
    dispatch(searchProductByName(search));
  }, [search]);
  return (
    <div className="bg-gray-50 my-5 p-5">
      <h1 className="text-center text-yellow-800 pb-5 text-lg">TÌM KIẾM</h1>
      <input
        type="text"
        name="name"
        onChange={(e) => handleSearch(e)}
        className="bg-gray-600 w-full py-2 px-1 rounded-md text-white"
        placeholder="Tìm kiếm sản phẩm.."
      />
    </div>
  );
};
export default Search;
