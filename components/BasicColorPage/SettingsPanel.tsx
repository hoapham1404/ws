'use client'

import { useState, useCallback } from 'react'
import { Preset } from '@/models/present_model'
import html2canvas from 'html2canvas'
import { usePathname } from 'next/navigation'
import { getRouteByPath } from '@/constants/routes'

// Define initial presets
const defaultPresets: Preset[] = [
  { label: '720p', width: 1280, height: 720 },
  { label: '1080p', width: 1920, height: 1080 },
  { label: '1440p', width: 2560, height: 1440 },
  { label: '4K', width: 3840, height: 2160 },
  // Add more presets as needed
]

interface SettingsPanelProps {
  currentColor: string;
  temperature: number;
  rgb: { r: number; g: number; b: number };
  onTemperatureChange?: (temp: number) => void;
}

export default function SettingsPanel({ 
  currentColor, 
  temperature, 
  rgb,
  onTemperatureChange 
}: SettingsPanelProps) {
  const [dimensions, setDimensions] = useState<{ width: number; height: number; label?: string }>({
    width: 1920,
    height: 1080,
    label: '1080p'
  })
  const [presets] = useState<Preset[]>(defaultPresets)

  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    if (selectedValue === 'Custom') {
      // Keep current dimensions but mark as custom
      setDimensions({
        width: dimensions.width,
        height: dimensions.height
      })
    } else {
      const preset = presets.find((p: Preset) => p.label === selectedValue)
      if (preset) {
        setDimensions(preset)
      }
    }
  }

  const handleDimensionChange = useCallback((type: 'width' | 'height', value: string) => {
    const numValue = parseInt(value)
    if (isNaN(numValue) || numValue <= 0) return

    setDimensions(prev => ({
      ...prev,
      [type]: numValue
    }))
  }, [])

  const currentPath = usePathname()
  const currentRoute = getRouteByPath(currentPath)

  const handleDownload = useCallback(async () => {
    const previewBox = document.getElementById('preview-box')
    if (!previewBox) return

    try {
      const canvas = await html2canvas(previewBox, {
        backgroundColor: currentColor,
        width: dimensions.width,
        height: dimensions.height,
      })

      // Create download link
      const link = document.createElement('a')
      link.download = `color-screen-${currentColor.replace('#', '')}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (error) {
      console.error('Error generating image:', error)
    }
  }, [currentColor, dimensions.width, dimensions.height])

  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className="mb-4 ml-4 text-2xl ">{currentRoute?.name}</h3>
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
      <button 
        onClick={handleDownload}
        className="w-full py-2 px-4 border rounded bg-white hover:bg-gray-50 mt-4"
      >
        Download
      </button>
      <div className="flex items-center gap-2 mt-4">
        <span 
          className="w-6 h-6 rounded-full" 
          style={{ backgroundColor: currentColor }}
        />
        <span>{currentColor}</span>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <label className="text-sm text-gray-600">Temperature</label>
        <div className="flex gap-2">
          <input
            type="number"
            min="1000"
            max="40000"
            value={temperature}
            onChange={(e) => onTemperatureChange?.(Number(e.target.value))}
            className="w-24 p-2 border rounded"
          />
          <span className="self-center">K</span>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">R:</label>
          <span>{rgb.r}</span>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">G:</label>
          <span>{rgb.g}</span>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">B:</label>
          <span>{rgb.b}</span>
        </div>
      </div>
      
    </>
  )
}