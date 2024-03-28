import { getAllUsers } from '04_features/AdminChangingPanelData/model/service/getAllUsers'
import type { IUser } from '05_entities/User'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { AdminDataSchema } from '../types/adminDataSchema'


const initialState: AdminDataSchema = {
  users: [],
  isLoading: false
}

export const adminDataSlice = createSlice({
  name: 'adminData',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(getAllUsers.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
  selectors: {
    selectUsersData: sliceState => sliceState.users
  }

})

export const { actions: adminDataActions } = adminDataSlice
export const { selectUsersData } = adminDataSlice.selectors
export const { reducer: adminDataReducer } = adminDataSlice

