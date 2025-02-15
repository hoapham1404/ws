'use client'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { setDimensions, setCustomDimensions } from '@/store/settingsSlice'
import { useCallback } from 'react'
import { Preset } from '@/models/present_model'

export default function SettingsPanel() {
  const dispatch = useDispatch()
  // Add type assertion for settings state
  const { dimensions, presets } = useSelector((state: RootState) => state.settings as { 
    dimensions: { width: number; height: number; label?: string };
    presets: Preset[];
  })
  const { currentColor } = useSelector((state: RootState) => state.color)

  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    if (selectedValue === 'Custom') {
      // Keep current dimensions but mark as custom
      dispatch(setCustomDimensions({
        width: dimensions.width,
        height: dimensions.height
      }))
    } else {
      // Add type for preset parameter
      const preset = presets.find((p: Preset) => p.label === selectedValue)
      if (preset) {
        dispatch(setDimensions(preset))
      }
    }
  }

  const handleDimensionChange = useCallback((type: 'width' | 'height', value: string) => {
    const numValue = parseInt(value)
    if (isNaN(numValue) || numValue <= 0) return

    dispatch(setCustomDimensions({
      ...dimensions,
      [type]: numValue
    }))
  }, [dimensions, dispatch])

  return (
    <>
      <div>
        <h3 className="mb-2">Screen dimensions</h3>
        <select 
          className="w-full p-2 border rounded"
          value={dimensions.label || 'Custom'}
          onChange={handlePresetChange}
        >
          {presets.map((preset: { label: string, width: number, height: number }) => (
            <option key={preset.label} value={preset.label}>
              {preset.label} ({preset.width}x{preset.height})
            </option>
          ))}
          <option value="Custom">Custom</option>
        </select>
      </div>
      <div className="flex gap-4 mt-4">
        <div>
          <label className="text-sm text-gray-600">Width</label>
          <div className="flex gap-2">
            <input
              type="number"
              min="1"
              value={dimensions.width}
              onChange={(e) => handleDimensionChange('width', e.target.value)}
              className="w-24 p-2 border rounded"
            />
            <span className="self-center">px</span>
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-600">Height</label>
          <div className="flex gap-2">
            <input
              type="number"
              min="1"
              value={dimensions.height}
              onChange={(e) => handleDimensionChange('height', e.target.value)}
              className="w-24 p-2 border rounded"
            />
            <span className="self-center">px</span>
          </div>
        </div>
      </div>
      <button className="w-full py-2 px-4 border rounded bg-white hover:bg-gray-50 mt-4">
        Download
      </button>
      <div className="flex items-center gap-2 mt-4">
        <span 
          className="w-6 h-6 rounded-full" 
          style={{ backgroundColor: currentColor }}
        />
        <span>{currentColor}</span>
      </div>
    </>
  )
} 