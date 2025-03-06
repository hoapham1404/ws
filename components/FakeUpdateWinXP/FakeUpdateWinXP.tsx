import { useUpdateProgress } from '@/contexts/UpdateProgressContext';
import WindowsXPLogo from '@/public/window-xp-logo.png';
import { useFullScreen } from '../(prank-screen)/hooks/useFullScreen';
import Image from 'next/image';
export default function FakeUpdateWinXP() {
  const { progress } = useUpdateProgress();
  const { isFullscreen } = useFullScreen();

  return (
    <div className="h-full bg-[#00309c] text-white flex items-center justify-end" style={{ backgroundColor: '#00309c' }}>
      <div className={`w-full h-5/6 bg-[#5b7edc] flex justify-center items-center`} style={{ backgroundColor: '#5b7edc' }}>
        <div className={` flex flex-col items-end gap-2 ${isFullscreen ? 'w-1/2' : 'w-4/5'}`}>

          <Image
            src={WindowsXPLogo.src}
            alt="Windows XP Logo"
            width={isFullscreen ? 300 : 60}
            height={isFullscreen ? 150 : 30}
          />
          <div className={`text-right leading-normal ${isFullscreen ? 'text-2xl' : 'text-sm'}`}>
            <p className="my-[5px]">Installing Windows Updates...{progress}%</p>
            <p className="my-[5px]">Do not turn off or unplug your computer.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
