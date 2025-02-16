export default function PreviewBox({ children }) {
  return (
    <div 
      id="preview-box"
      className="relative w-[90%] md:w-[550px] h-[300px] mx-auto rounded-lg overflow-hidden shadow-2xl"
    >
      {children}
    </div>
  )
} 