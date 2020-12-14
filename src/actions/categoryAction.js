import { fetchCategoriesApi, findCategoryApi } from "../api/CategoryApi";
import { FETCH_CATEGORIES, FETCH_PRODUCTS } from "../constans/type";

function getFetchCategories(data) {
  return {
    type: FETCH_CATEGORIES,
    payload: data,
  };
}

function getCategoryById(data) {
  return {
    type: FETCH_PRODUCTS,
    payload: data,
  };
}

export const findcategoryById = (id) => {
  return async (dispatch) => {
    try {
      const { products } = await findCategoryApi(id);
      if (products) {
        dispatch(getCategoryById(products));
      }
    } catch (err) {
      throw err;
    }
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const data = await fetchCategoriesApi();
      if (data) {
        dispatch(getFetchCategories(data));
      }
    } catch (err) {
      throw err;
    }
  };
};
