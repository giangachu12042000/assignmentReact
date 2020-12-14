const initialState = {
  categories: [],
  // productCategory: [],
};
const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    // case "FIND_CATEGORY_BY_ID":
    //   return {
    //     ...state,
    //     productCategory: action.payload,
    //   };
    default:
      return state;
  }
};
export default CategoryReducer;
