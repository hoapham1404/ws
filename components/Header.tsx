export default function Header({ title }: { title: string }) {
  return (
    <header className="text-center mb-12 mt-16">
      <h1 className="text-5xl ">{title}</h1>
    </header>
  )
} 