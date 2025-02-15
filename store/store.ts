import { configureStore } from '@reduxjs/toolkit'
import colorReducer from './colorSlice'
import settingsReducer from './settingsSlice'

export const store = configureStore({
    reducer: {
        color: colorReducer,
        settings: settingsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 