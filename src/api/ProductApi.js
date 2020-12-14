import axios from "../utils/axios";

export const fetchProductsApi = async (params) => {
  try {
    const { page, _limit } = params;
    const start = page <= 1 ? 0 : (Number(page) - 1) * 6;
    const { data } = await axios.get(
      `/products?_start=${start}&_limit=${_limit}&_sort=name:ASC`
    );
    console.log(data, "==>daed");
    return data;
  } catch (err) {
    throw err;
  }
};

export const countProductApi = async () => {
  try {
    const { data } = await axios.get("/products/count");
    return data;
  } catch (err) {
    throw err;
  }
};

export const getProductsApi = async (id) => {
  try {
    const { data } = await axios.get(`/products/${id}`);

    return data;
  } catch (err) {
    throw err;
  }
};

export const searchProductByNameApi = async (name) => {
  try {
    const { data } = await axios.get(`/products?name_contains=${name}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const filterProductByPriceApi = async (params) => {
  try {
    const { lt, gt } = params;
    const { data } = await axios.get(
      `/products?price_gte=${lt}&price_lte=${gt}`
    );
    return data;
  } catch (err) {
    throw err;
  }
};
