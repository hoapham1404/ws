export default function Footer() {
  return (
    <footer className="bg-gray-200 text-black mt-8">
      <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h3 className="font-semibold text-lg">Enhancing Productivity and Focus</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>Improve concentration in noisy environments</li>
            <li>Boost productivity at work</li>
            <li>Enhance focus during study sessions</li>
            <li>Minimize distractions while working from home</li>
            <li>Facilitate deep work periods</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Sleep and Relaxation</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>Promote faster sleep onset</li>
            <li>Mask disruptive nighttime noises</li>
            <li>Improve sleep quality for insomniacs</li>
            <li>Soothe babies and young children</li>
            <li>Create a calming bedtime routine</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Health and Well-being</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>Reduce stress and anxiety levels</li>
            <li>Aid in meditation and mindfulness practices</li>
            <li>Help manage tinnitus symptoms</li>
            <li>Encourage relaxation during yoga</li>
            <li>Support mental health by reducing sensory overload</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-gray-300 text-sm text-center py-4">
        <p className="mb-1">
          <a href="#" className="mx-2">Privacy policy</a> |
          <a href="#" className="mx-2">Terms & conditions</a> |
          <a href="#" className="mx-2">Contact us</a>
        </p>
        <p>© 2025 WS, Made in Ukraine 🇺🇦</p>
      </div>
    </footer>
  );
}
