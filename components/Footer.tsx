export default function Footer() {
  return (
    <footer className="bg-gray-200 text-black mt-8">
      <div className="bg-gray-300 text-sm text-center py-4">
        <p className="mb-1">
          {
            ["/privacy-policy", "/terms-and-conditions", "/contact-us"].map((link, index) => (
              <a key={index} href={link} onClick={(e) => { e.preventDefault(); window.location.href = link }} className="mx-2">{link.replace("/", " ")}</a>
            ))
          }
        </p>
        <p>© 2025 WS, Made in US 🇺🇸</p>
      </div>
    </footer>
  );
}
