import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import users from './userSlice'

const combineReducer = combineReducers({
  users
})
export const makeStore = () =>
  configureStore({
    reducer: combineReducer
  })
export const wrapper = createWrapper(makeStore)
