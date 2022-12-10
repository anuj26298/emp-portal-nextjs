import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  employeeList: []
}
export const employeeListSlice = createSlice({
  name: 'employeeList',
  initialState,
  reducers: {
    updateEmployeeList: (state, action) => {
      state.employeeList = action.payload
    }
  }
})
export const { updateEmployeeList } = employeeListSlice.actions
export default employeeListSlice.reducer