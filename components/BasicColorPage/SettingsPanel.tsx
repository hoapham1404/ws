'use client'

export default function SettingsPanel({ dimensions, setDimensions }: { dimensions: { width: number, height: number }, setDimensions: (dimensions: { width: number, height: number }) => void }) {
  return (
    <>
      <div>
        <h3 className="mb-2">Yellow background</h3>
        <select className="w-full p-2 border rounded">
          <option>1080p</option>
        </select>
      </div>
      <div className="flex gap-4">
        <input
          type="text"
          value={dimensions.width}
          onChange={(e) => setDimensions({ ...dimensions, width: parseInt(e.target.value) })}
          className="w-24 p-2 border rounded"
        />
        <span className="self-center">px</span>
        <input
          type="text"
          value={dimensions.height}
          onChange={(e) => setDimensions({ ...dimensions, height: parseInt(e.target.value) })}
          className="w-24 p-2 border rounded"
        />
        <span className="self-center">px</span>
      </div>
      <button className="w-full py-2 px-4 border rounded bg-white hover:bg-gray-50">
        Download
      </button>
      <div className="flex items-center gap-2">
        <span className="w-6 h-6 bg-gray-200 rounded-full"></span>
        <span>#google_v</span>
      </div>
    </>
  )
  } 