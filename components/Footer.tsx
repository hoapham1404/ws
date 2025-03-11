export default function Footer() {
  return (
    <footer className="bg-gray-200 text-black mt-8">
      <div className="bg-gray-300 text-sm text-center py-4">
        <p className="mb-1">
          {
            Array.from(new Map([
              ["/privacy-policy", "Privacy policy"],
              ["/terms-and-conditions", "Terms & conditions"],
              ["/contact-us", "Contact us"]
            ]).entries()).map(([key, value]) => (
              <a key={key} href={key} onClick={(e) => { e.preventDefault(); window.location.href = key }} className="mx-2">{value}</a>
            ))
          }
        </p>
        <p>© 2025 WS, Made in US 🇺🇸</p>
      </div>
    </footer>
  );
}
