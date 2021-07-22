import { all } from "redux-saga/effects";
import watcherProductSaga from "./handlers/fetchProducts";

export default function* rootSaga() {
  yield all([watcherProductSaga()]);
}
