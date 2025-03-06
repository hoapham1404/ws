import { useUpdateProgress } from '@/contexts/UpdateProgressContext';
import { useFullScreen } from '../(prank-screen)/hooks/useFullScreen';

export default function FakeUpdateWin10() {
  const { progress, timeRemaining } = useUpdateProgress();
  const { isFullscreen } = useFullScreen();

  return (
    <div className={`h-full bg-[#0078D7] text-white flex justify-center items-center ${isFullscreen ? 'px-0' : 'px-5'
      }`}>
      <div className={`text-center h-full flex flex-col justify-center relative w-full ${isFullscreen ? 'max-w-[800px]' : 'max-w-[500px]'
        }`}>
        <div className={`mx-auto rounded-full animate-spin border-t-white border-white/30 ${isFullscreen ? 'w-[60px] h-[60px] border-[4px] mb-8' : 'w-[30px] h-[30px] border-2 mb-4'
          }`}></div>
        <div className={`space-y-2 ${isFullscreen ? 'text-3xl' : 'text-base'}`}>
          <p>Working on updates {progress}% complete</p>
          <p>{timeRemaining}</p>
          <p>Don&apos;t turn off your PC. This will take a while</p>
        </div>
        <p className={`absolute left-0 right-0 w-full ${isFullscreen ? 'bottom-20 text-xl' : 'bottom-10 text-sm'
          }`}>
          Your computer will restart automatically.
        </p>
      </div>
    </div>
  );
}
