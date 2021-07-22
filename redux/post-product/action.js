import { POST_PRODUCT_REQUEST } from "./types";

export const createPostOrder = (postData) => {
  debugger;
  return {
    type: POST_PRODUCT_REQUEST,
    payload: postData,
  };
};
