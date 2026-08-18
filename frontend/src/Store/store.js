import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../Authentication/authSlice";
import loaderReducer from "../Authentication/loaderSlice"
import  hospitalAuthSliceReduces  from '../Authentication/hospitalAuthSlice';

export default configureStore({
  reducer: {
    user: authReducer,
    loader: loaderReducer,
    hospital: hospitalAuthSliceReduces
  }
})