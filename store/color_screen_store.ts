import { create } from 'zustand'

interface ColorScreenState {
    currentColor: string
    title: string
    colorOptions: Array<{ name: string; color: string }>
    screenOptions: Array<{ name: string; color: string }>
    setColor: (color: string) => void
}

export const useColorScreenStore = create<ColorScreenState>((set) => ({
    currentColor: '#ffffff',
    title: 'White screen',
    colorOptions: [
        { name: 'Yellow screen', color: '#ffff00' },
        { name: 'Orange screen', color: '#ffa500' },
        { name: 'Pink screen', color: '#ffc0cb' },
        { name: 'Purple screen', color: '#800080' },
        { name: 'Zoom Lighting', color: '#fff5e6' },
    ],
    screenOptions: [
        { name: 'White screen', color: '#ffffff' },
        { name: 'Black screen', color: '#000000' },
        { name: 'Red screen', color: '#ff0000' },
        { name: 'Green screen', color: '#00ff00' },
        { name: 'Blue screen', color: '#0000ff' },
    ],
    setColor: (color: string) =>
        set((state) => {
            const option = [...state.colorOptions, ...state.screenOptions].find(
                (opt) => opt.color === color
            )
            return {
                currentColor: color,
                title: option?.name || 'Custom color',
            }
        }),
})) 