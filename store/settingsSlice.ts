import { Dimensions, SettingsState } from '@/models/dimensions_model'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'




const initialState: SettingsState = {
    dimensions: {
        width: 1920,
        height: 1080,
        label: '1080p'
    },
    presets: [
        { width: 1920, height: 1080, label: '1080p' },
        { width: 2560, height: 1440, label: '1440p' },
        { width: 3840, height: 2160, label: '4K' },
    ]
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setDimensions: (state, action: PayloadAction<Dimensions>) => {
            state.dimensions = action.payload
        },
        setCustomDimensions: (state, action: PayloadAction<{ width: number; height: number }>) => {
            state.dimensions = {
                ...action.payload,
                label: 'Custom'
            }
        }
    },
})

export const { setDimensions, setCustomDimensions } = settingsSlice.actions
export default settingsSlice.reducer 