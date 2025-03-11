import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-black mt-8">
      <div className="bg-gray-300 text-sm text-center py-4">
        <p className="mb-1">
          <Link href="/privacy-policy" className="mx-2">Privacy policy</Link> |
          <Link href="/terms-and-conditions" className="mx-2">Terms & conditions</Link> |
          <Link href="/contact-us" className="mx-2">Contact us</Link>
        </p>
        <p>© 2025 WS, Made in US 🇺🇸</p>
      </div>
    </footer>
  );
}
