import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./reducers/auth";
import modalReducer from "./reducers/modal";
import postReducer from "./reducers/post";

const initialState = {};

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  posts: postReducer
});

const store = configureStore({
  reducer: rootReducer,
  proloadedState: initialState,
});

export default store;



// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { thunk } from "redux-thunk";

// const initialState = {};

// const reducers = combineReducers({});

// const store = createStore(
//   reducers,
//   initialState,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;
