import { useUpdateProgress } from '@/contexts/UpdateProgressContext';
import { useFullScreen } from '../(prank-screen)/hooks/useFullScreen';

export default function FakeUpdateWin11() {
  const { progress } = useUpdateProgress();
  const { isFullscreen } = useFullScreen();

  return (
    <div className={`w-full h-full bg-black text-white flex justify-center items-center px-5`}>
      <div className={`text-center h-full flex flex-col justify-center relative w-full max-w-[500px]`}>
        <div className={`${isFullscreen ? 'h-16' : 'h-12'} aspect-square mx-auto mb-[15px] border-3 border-white/30 border-t-white rounded-full animate-spin`} />
        <div className={`${isFullscreen ? 'text-2xl' : 'text-sm'} leading-relaxed w-full`}>
          <p>Working on updates</p>
          <p>{progress}% complete</p>
        </div>
        <p className={`${isFullscreen ? 'text-2xl' : 'text-sm'} absolute bottom-10 left-0 right-0 w-full`}>
          Don&apos;t turn off your computer
        </p>
      </div>
    </div>
  );
}
