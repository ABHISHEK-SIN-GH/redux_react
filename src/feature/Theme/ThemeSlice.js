import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "red",
}

export const changeThemes = createSlice({
  name: 'themeChanger',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme } = changeThemes.actions

export default changeThemes.reducer