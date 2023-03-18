import { configureStore } from '@reduxjs/toolkit'
import { globalSlice } from 'src/state/slice/global.slice'

const store = configureStore({
  reducer: {
    [globalSlice.name]: globalSlice.reducer,
  } as const,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
