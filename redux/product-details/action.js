import { GET_PRODUCT_REQUEST } from "./types";

export const getProductDetail = (id) => {
  return {
    type: GET_PRODUCT_REQUEST,
    payload:id
  };
};
