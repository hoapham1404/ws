export default function TipItem({ title, content }: { title: string, content: string }) {
  return (
    <div className="w-full rounded-lg border border-amber-100 overflow-hidden bg-white shadow-sm">
      <div className="p-4 bg-amber-50 border-b border-amber-100">
        <h1 className="text-lg font-medium text-gray-800">{title}</h1>
      </div>
      <div className="p-6">
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  )
}
