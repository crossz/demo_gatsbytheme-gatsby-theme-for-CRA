import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count + 1,
    })
  }
  return state
}

const initialState = { count: 0 }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore


// /**
//  * References:
//  * - https://github.com/reduxjs/redux-toolkit/blob/2afd0f9b4cbb1aa33e44e0952cd9c2cccc7714d3/docs/usage/usage-guide.md
//  */
// import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./slices";

// const createStore = (preloadedState) =>
//   configureStore({
//     preloadedState,
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: false,
//         immutableCheck: false,
//       }),
//     // devTools: process.env.NODE_ENV !== "production",
//   });

// // export const store = createStore();
// export default createStore