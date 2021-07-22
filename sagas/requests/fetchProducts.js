import axios from "axios";

const url = "http://localhost:4000/product";

//! Fetch all products
export const fetchProducts = () => {
  return axios.request({
    method: "get",
    url: "http://localhost:4000/product",
  });
};

//! Fetch single product
export const fetchProductDetail = (action) => {
  const id = action.payload;
  return axios
    .request({
      method: "get",
      url: `http://localhost:4000/product/${id}`,
    })
    .catch((err) => console.log(err));
};

//! Post Order
export const postProducts = (action) => {
  debugger;
  const updatedData = action.payload;
  return axios.post(
    `http://localhost:4000/order`, updatedData);
};

// export default fetchProducts;
