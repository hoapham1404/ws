export default function PrankScreenLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-4xl mx-auto flex flex-col">
      {children}
    </section>
  )
}
