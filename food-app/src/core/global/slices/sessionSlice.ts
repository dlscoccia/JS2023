import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
export interface sessionState {}

const initialState = {
  isLoggedIn: true,
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
    },
  },
})

export const { login, logout } = sessionSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const isLoggedIn = (state: RootState) => state.session.isLoggedIn

export default sessionSlice.reducer
