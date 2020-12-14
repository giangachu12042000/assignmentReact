import axios from "../utils/axios";

export const fetchCategoriesApi = async () => {
  try {
    const { data } = await axios.get("/categories");
    return data;
  } catch (err) {
    throw err;
  }
};

export const findCategoryApi = async (id) => {
  try {
    const { data } = await axios.get(`/categories/${id}`);
    return data;
  } catch (err) {
    throw err;
  }
};
