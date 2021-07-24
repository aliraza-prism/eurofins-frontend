import {
  call,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import {
  fetchProducts,
  fetchProductDetail,
  postProducts,
} from "../requests/fetchProducts";
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_REQUEST,
} from "./../../redux/product/types";
import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
} from "./../../redux/product-details/types";
import {
  POST_PRODUCT_FAILED,
  POST_PRODUCT_REQUEST,
  POST_PRODUCT_SUCCESS,
} from "../../redux/post-product/types";

//! Handle products
function* handleProducts() {
  try {
    const products = yield call(fetchProducts);
    yield put({
      type: GET_PRODUCTS_SUCCESS,
      products: products,
    });
  } catch (error) {
    yield put({
      type: GET_PRODUCTS_FAILED,
      message: error.message,
    });
  }
}

//! Handle product details
function* handleProductDetails(action) {
  try {
    const productDetail = yield call(() =>
      fetchProductDetail(action)
    );
    yield put({
      type: GET_PRODUCT_SUCCESS,
      productDetail: productDetail,
    });
  } catch (error) {
    yield put({
      type: GET_PRODUCT_FAILED,
      message: error.message,
    });
  }
}

//! Handle post product
function* handlePostProduct(action) {
  debugger;
  try {
    const postProduct = yield call(postProducts(action));
    yield put({
      type: POST_PRODUCT_SUCCESS,
      postProduct: postProduct,
    });
  } catch (error) {
    yield put({
      type: POST_PRODUCT_FAILED,
      message: error.message,
    });
  }
}

//! ***Watcher Saga***
function* watcherProductSaga() {
  yield takeEvery(GET_PRODUCTS_REQUEST, handleProducts);
  yield takeEvery(
    GET_PRODUCT_REQUEST,
    handleProductDetails
  );
  yield takeLatest(POST_PRODUCT_REQUEST, handlePostProduct);
}

export default watcherProductSaga;
