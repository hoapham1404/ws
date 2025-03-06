import useDVDStore from "./dvdStore";

export default function DVDSetting() {
  const { speed, size, setSpeed, setSize } = useDVDStore()

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="speed" className="text-center">Speed</label>
        <input type="range" id="speed" min="1" max="100" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="size" className="text-center">Size</label>
        <input type="range" id="size" min="1" max="100" value={size} onChange={(e) => setSize(Number(e.target.value))} />
      </div>
    </div>
  )
}
