import {
  fetchProductsApi,
  getProductsApi,
  searchProductByNameApi,
  countProductApi,
  filterProductByPriceApi,
} from "../api/ProductApi";
import {
  FETCH_PRODUCTS,
  GET_PRODUCT_BY_ID,
  SEARCH_PRODUCT_PARAM,
  COUNT_PRODUCT,
  FILTER_PRICE_PRODUCT,
} from "../constans/type";

function getFetchProducts(data) {
  return {
    type: FETCH_PRODUCTS,
    payload: data,
  };
}

function getFilter(data) {
  return {
    type: FETCH_PRODUCTS,
    payload: data,
  };
}

function getCountProducts(data) {
  return {
    type: COUNT_PRODUCT,
    payload: data,
  };
}

function getProduct(data) {
  return {
    type: GET_PRODUCT_BY_ID,
    payload: data,
  };
}

function searchProduct(data) {
  return {
    type: SEARCH_PRODUCT_PARAM,
    payload: data,
  };
}

export const filterProductByPrice = (params) => {
  return async (dispatch) => {
    try {
      const data = await filterProductByPriceApi(params);
      if (data) {
        dispatch(getFilter(data));
      }
    } catch (err) {
      throw err;
    }
  };
};

export const countProduct = () => {
  return async (dispatch) => {
    try {
      const data = await countProductApi();
      if (data) {
        dispatch(getCountProducts(data));
      }
    } catch (err) {
      throw err;
    }
  };
};

export const getProductById = (id) => {
  return async (dispatch) => {
    try {
      const data = await getProductsApi(id);
      if (data) {
        dispatch(getProduct(data));
      }
    } catch (err) {
      throw err;
    }
  };
};

export const searchProductByName = (name) => {
  return async (dispatch) => {
    try {
      const data = await searchProductByNameApi(name);
      if (data) {
        dispatch(searchProduct(data));
      }
    } catch (err) {
      throw err;
    }
  };
};

export const fetchProducts = (params) => {
  console.log(params, "======>param");
  return async (dispatch) => {
    try {
      const data = await fetchProductsApi(params);
      if (data) {
        dispatch(getFetchProducts(data));
      }
    } catch (err) {
      throw err;
    }
  };
};
