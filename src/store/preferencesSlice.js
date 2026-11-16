import { createSlice } from '@reduxjs/toolkit'

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: { darkMode: localStorage.getItem('shopsphere-theme') === 'dark' },
  reducers: {
    toggleTheme: state => {
      state.darkMode = !state.darkMode
      localStorage.setItem('shopsphere-theme', state.darkMode ? 'dark' : 'light')
    }
  }
})
export const { toggleTheme } = preferencesSlice.actions
export default preferencesSlice.reducer
