export default function NoSignalPreview() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex">
        <div className="flex-1 bg-gray-200"></div>
        <div className="flex-1 bg-yellow-400"></div>
        <div className="flex-1 bg-cyan-400"></div>
        <div className="flex-1 bg-green-500"></div>
        <div className="flex-1 bg-fuchsia-500"></div>
        <div className="flex-1 bg-red-600"></div>
        <div className="flex-1 bg-blue-700"></div>
        <div className="flex-1 bg-black"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-green-900 px-4 py-2">
          <span className="text-white font-mono text-lg">NO SIGNAL</span>
        </div>
      </div>

      {/* Add scan line effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 2px, transparent 4px)',
          animation: 'scanlines 10s linear infinite'
        }}
      ></div>

      <style jsx>{`
        @keyframes scanlines {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 0 100%;
          }
        }
      `}</style>
    </div>
  )
}
