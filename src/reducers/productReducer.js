const initialState = {
  products: [],
  product: null,
  total: null,
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_PRODUCT_BY_ID":
      return {
        ...state,
        product: action.payload,
      };
    case "SEARCH_PRODUCT_PARAM":
      return {
        ...state,
        products: action.payload,
      };
    case "COUNT_PRODUCT":
      return {
        ...state,
        total: action.payload,
      };
    default:
      return state;
  }
};
export default ProductReducer;
