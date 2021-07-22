import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import {
  persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";
import products from "../redux/product/reducer";
import productDetail from "../redux/product-details/reducer";
import postProduct from "../redux/post-product/reducer";

const rootReducer = combineReducers({
  products,
  productDetail,
  postProduct,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

const sagaMiddleware = createSagaMiddleware();
// let enhancer;
// if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
//   enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
//     applyMiddleware(sagaMiddleware)
//   );
// } else {
//   enhancer = compose(applyMiddleware(sagaMiddleware));
// }
const composeEnhancer = composeWithDevTools({
  port: 8080,
  realtime: true,
});
export const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
  // composeWithDevTools(),
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
