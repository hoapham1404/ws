export default function PreviewBox({ children }) {
  return (
    <div 
      id="preview-box"
      className="relative w-[90%] md:w-[450px] h-[250px] mx-auto rounded-lg overflow-hidden shadow-2xl"
    >
      {children}
    </div>
  )
} 