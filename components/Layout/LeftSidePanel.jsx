export default function LeftSidePanel({ children }) {
  return (
    <div className="static md:absolute md:left-20 space-y-2 mb-4 md:mb-0">
      {children}
    </div>
  )
} 