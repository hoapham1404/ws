import Image from "next/image";
import Broken from "./broken.webp";

export default function BrokenScreen() {
  return (
    <Image
      src={Broken}
      alt="Broken Screen"
      className="w-full h-full object-cover"
    />
  );
}
