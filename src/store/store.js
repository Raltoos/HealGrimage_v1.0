import { configureStore, createSlice } from '@reduxjs/toolkit'
import sidebarSlice from './slices/siderbarSlice'
import userDetailSlice from './slices/userDetailSlice'

const hotelStore = configureStore({
    reducer: {
        sidebar: sidebarSlice.reducer,
        users: userDetailSlice.reducer
    }
})

export default hotelStore