import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
} from "./types";

const initialState = {
  productDetail: "",
  loading: false,
  error: null,
};

const productDetail = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetail: action.productDetail,
      };
    case GET_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};

export default productDetail;
