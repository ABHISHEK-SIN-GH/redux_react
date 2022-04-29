import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/Counter/CounterBySlice'
import themeReducer from '../feature/Theme/ThemeSlice'
export const store = configureStore({
  reducer: {
    countx: counterReducer,
    themx: themeReducer
  },
})