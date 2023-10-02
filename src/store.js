import { configureStore } from '@reduxjs/toolkit'
import cartSlices from './slices/cartSlices'

export default configureStore({
  reducer: {
    cartItem : cartSlices,
  },
})