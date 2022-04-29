import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/Counter/CounterBySlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})