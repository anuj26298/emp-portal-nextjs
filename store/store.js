import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import employeeList from './employeeListSlice'
import reduxLogger from 'next-redux-logger';

const combineReducer = combineReducers({
  employeeList
})


// Pass it as a middleware
const middlewares = [reduxLogger];
const masterReducer=(state,action)=>{
  if(action.type===HYDRATE){
    const nextState={
      ...state,
      employeeList:{
        employeeList:action.payload.employeeList.employeeList
      }
    }
    return nextState
  }else{
    return combineReducer(state,action)
  }
}
export const makeStore = () =>
  configureStore({
    reducer: masterReducer
  })
export const wrapper = createWrapper(makeStore,applyMiddleware(...middlewares),{debug:true})
