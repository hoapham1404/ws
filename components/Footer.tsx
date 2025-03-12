export default function Footer() {
  return (
    <footer className=" text-black mt-auto pt-4" style={{ backgroundColor: "#d6d6d6", minHeight: "150px" }}>
      <div className=" text-center py-4 flex flex-col items-center justify-center gap-1">
        <p className="mb-2">
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
        <p>© 2025 WS, Made in US <span className="text-xs">🇺🇸</span></p>
      </div>
    </footer>
  );
}
