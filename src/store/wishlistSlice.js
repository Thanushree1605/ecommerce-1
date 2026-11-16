import { createSlice } from '@reduxjs/toolkit'

const loadWishlist = () => {
  try { return JSON.parse(localStorage.getItem('shopsphere-wishlist') || '[]') }
  catch { return [] }
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: { items: loadWishlist() },
  reducers: {
    toggleWishlist: (state, action) => {
      const exists = state.items.some(item => item.id === action.payload.id)
      state.items = exists
        ? state.items.filter(item => item.id !== action.payload.id)
        : [...state.items, action.payload]
    }
  }
})
export const { toggleWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
