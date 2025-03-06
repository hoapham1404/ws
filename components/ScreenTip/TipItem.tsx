export default function TipItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="w-full rounded-lg border border-amber-100 overflow-hidden bg-white shadow-sm" style={{ boxShadow: '0 .0125rem 15px #ffbe5c' }}>
      <div className="p-4 bg-[#f3f1f0]">
        <h1 className="text-lg font-medium text-gray-800">{title}</h1>
      </div>
      <div className="py-10 px-6 text-lg text-center">
        <p className=" text-wrap ">{description}</p>
      </div>
    </div>
  )
}
