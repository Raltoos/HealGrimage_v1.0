import { configureStore, createSlice } from '@reduxjs/toolkit'
import sidebarSlice from './slices/siderbarSlice'

const hotelStore = configureStore({
    reducer: {
        sidebar: sidebarSlice.reducer,
    }
})

export default hotelStore