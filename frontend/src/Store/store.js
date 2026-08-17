import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../Authentication/authSlice";
import loaderReducer from "../Authentication/loaderSlice"

export default configureStore({
  reducer: {
    user: authReducer,
    loader: loaderReducer
  }
})