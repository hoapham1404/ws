export interface Dimensions {
  width: number
  height: number
  label?: string
}

export interface SettingsState {
  dimensions: Dimensions
  presets: Dimensions[]
}
