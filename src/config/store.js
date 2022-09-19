import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from "../features/AuthSlice"
import UserReducer from '../features/UserSlice'



export const store = configureStore({
    reducer: {
      Auth: AuthReducer,
      User: UserReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  })