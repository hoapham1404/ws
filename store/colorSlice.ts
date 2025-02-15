import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ColorState {
    currentColor: string
    title: string
}

const initialState: ColorState = {
    currentColor: '#FFFFFF',
    title: 'White screen'
}

export const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        setColor: (state, action: PayloadAction<{ color: string; name: string }>) => {
            state.currentColor = action.payload.color
            state.title = action.payload.name
        },
    },
})

export const { setColor } = colorSlice.actions
export default colorSlice.reducer 