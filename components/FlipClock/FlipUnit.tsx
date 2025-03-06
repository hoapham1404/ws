import { motion } from "framer-motion";
import { useFullScreen } from "../(prank-screen)/hooks/useFullScreen";
export default function FlipUnit({ number }: { number: string }) {
  const { isFullscreen } = useFullScreen();
  return (
    <div className={`relative ${isFullscreen ? 'w-[150px] h-[225px] text-[10rem]' : 'w-14 h-20'} bg-gray-800 text-white rounded-lg flex items-center justify-center overflow-hidden`}>
      <motion.div
        key={number}
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        exit={{ rotateX: -90, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`absolute w-full h-full flex items-center justify-center`}
      >
        {number}
      </motion.div>
    </div>
  );
}
