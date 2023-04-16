import { combineReducers } from "@reduxjs/toolkit";
// import userReducer, { userSlice } from './userSlice'
import authReducer, { authSlice } from "./authSlice";
// import testCenterReducer, { testCenterSlice } from './testCenterSlice'
// import docReducer, { docSlice } from './docSlice'

export const rootReducer = combineReducers({
  // [userSlice.name]: userReducer,
  // [testCenterSlice.name]: testCenterReducer,
  [authSlice.name]: authReducer,
  // [docSlice.name]: docReducer,
});
