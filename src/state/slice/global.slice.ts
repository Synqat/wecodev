import { createSlice } from '@reduxjs/toolkit'

export interface GlobalState {
  test: number
}

const initialState = {
  test: 0,
} satisfies GlobalState

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    incTest: (state) => {
      state.test += 1
    },
  },
})

export const { incTest } = globalSlice.actions
