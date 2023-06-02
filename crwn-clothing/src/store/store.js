// import {compose, createStore, applyMiddleware} from "redux";
// import logger from "redux-logger";
// import {persistStore, persistReducer} from "redux-persist";
// import storage from "redux-persist/lib/storage";
// // import thunk from "redux-thunk";
// import createSagaMiddleware from "redux-saga";
// import {rootSaga} from "./root-saga";
// import {rootReducer} from "./root-reducer";
//
//
// const persistConfig = {
//     key: "root", storage, whitelist: ["cart"]
// }
//
// const sagaMiddleware = createSagaMiddleware();
//
// const persistedReducer = persistReducer(persistConfig, rootReducer);
//
// const middleWares = [process.env.NODE_ENV === "development" && logger, sagaMiddleware].filter(Boolean);
//
// const composeEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//
// const composedEnhancer = composeEnhancer(applyMiddleware(...middleWares));
//
// export const store = createStore(persistedReducer, undefined, composedEnhancer);
// sagaMiddleware.run(rootSaga);
// export const persistor = persistStore(store);

//Redux Toolkit;

import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./root-reducer";
import logger from "redux-logger";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(Boolean);


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares)
})
