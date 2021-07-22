import axios from "axios";

const url = "https://eurofins-backend.herokuapp.com";

//! Fetch all products
export const fetchProducts = () => {
  return axios.request({
    method: "get",
    // url: "http://localhost:4000/product",
    url: "https://eurofins-backend.herokuapp.com/product",
  });
};

//! Fetch single product
export const fetchProductDetail = (action) => {
  const id = action.payload;
  return axios
    .request({
      method: "get",
      url: `https://eurofins-backend.herokuapp.com/product/${id}`,
    })
    .catch((err) => console.log(err));
};

//! Post Order
export const postProducts = (action) => {
  debugger;
  const updatedData = action.payload;
  return axios.post(
    `https://eurofins-backend.herokuapp.com/order`, updatedData);
};

// export default fetchProducts;
