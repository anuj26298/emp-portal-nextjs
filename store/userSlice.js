import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  users: 'USER'
}
export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.users = [action.payload]
    }
  }
})
export const { addUsers } = userSlice.actions
export default userSlice.reducer
