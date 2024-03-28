import { adminDataActions } from '04_features/AdminChangingPanelData/model/slice/adminDataSlice'
import type { IUser } from '05_entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from '01_app/providers/StoreProvider'


export const
  getAllUsers = createAsyncThunk<IUser[], void, ThunkConfig<string>>(
    'adminData/getAllUsers',
    async (_, thunkAPI) => {
      const { dispatch, extra, rejectWithValue  } = thunkAPI
      try {
        const response = await extra.api.get<IUser[]>('/user/all')

        if(!response.data) {
          throw new Error()
        }
        console.log(response.data)
        console.log(response)

        dispatch(adminDataActions.setUsers(response.data))
        return response.data
      } catch(e) {
        console.log(e)
        return rejectWithValue('error')
      }
    }
  )