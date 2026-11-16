import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProducts } from '../services/productService'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      return await getProducts()
    } catch (error) {
      return rejectWithValue(error.message || 'Unable to load products.')
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState: { items: [], status: 'idle', error: null, source: 'api' },
  reducers: { useFallbackCatalog: (state, action) => { state.items = action.payload; state.status = 'succeeded'; state.error = null; state.source = 'local' } },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => { state.status = 'loading'; state.error = null })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
        state.source = action.payload.source || 'api'
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload || 'Something went wrong.'
      })
  }
})

export const { useFallbackCatalog } = productsSlice.actions
export default productsSlice.reducer
