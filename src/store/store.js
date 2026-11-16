import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import cartReducer from './cartSlice'
import wishlistReducer from './wishlistSlice'
import preferencesReducer from './preferencesSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    preferences: preferencesReducer
  }
})

// Persist user shopping state outside reducers to keep reducer logic pure.
store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('shopsphere-cart', JSON.stringify(state.cart.items))
  localStorage.setItem('shopsphere-wishlist', JSON.stringify(state.wishlist.items))
})
