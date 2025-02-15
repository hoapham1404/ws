export default function PreviewBox({ children }) {
  return (
    <div className="relative w-[450px] h-[250px] mx-auto rounded-lg overflow-hidden shadow-lg">
      {children}
    </div>
  )
} 