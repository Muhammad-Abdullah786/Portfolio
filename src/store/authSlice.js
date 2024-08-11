import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: null,
    status: false
}




const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true,
                state.userData = action.payload
        },
        logout: (state) => {
            state.status = false,
                state.userData = null
        },
        updateUserData: (state, action) => {
            state.userData = action.payload
            // state.userData = {...state.userData,...action.payload}
        }
    }
})
export default authSlice