import { GET_PRODUCTS_REQUEST } from "./types";

export const getProducts = () => {
  return {
    type: GET_PRODUCTS_REQUEST,
  };
};
