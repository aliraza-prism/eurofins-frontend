import {
  POST_PRODUCT_REQUEST,
  POST_PRODUCT_SUCCESS,
  POST_PRODUCT_FAILED,
} from "./types";

const initialState = {
  postProduct: "",
  loading: false,
  error: null,
};
// reducer state is IMMUTABLE
// 
const postProduct = (state = initialState, action) => {
  switch (action.type) {
    case POST_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case POST_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        postProduct: action.payload,
      };
    case POST_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};

export default postProduct;
