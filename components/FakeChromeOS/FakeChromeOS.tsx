import { FC } from 'react';
import ChromeOSLogo from "@/public/chrome-logo.png";
import Image from 'next/image';
import { useFullScreen } from '../(prank-screen)/hooks/useFullScreen';

const FakeChromeOS: FC = () => {
  const { isFullscreen } = useFullScreen();
  return (
    <div className="h-full bg-[#1f1f1f] flex  items-center justify-center text-white">
      <div className={`h-full ${isFullscreen ? 'w-2/3' : 'w-full'} flex flex-col items-start justify-center`}>
        <div className='flex items-center justify-center'>
          <div className="flex items-center justify-center">
            <Image
              src={ChromeOSLogo}
              alt="Chrome OS"
              width={isFullscreen ? 40 : 20}
              height={isFullscreen ? 40 : 20}
            />
          </div>
          <div className='ml-2 text-sm'>chromeOS</div>
        </div>

        <hr className='w-full my-2' />

        <div className={`flex items-center ${isFullscreen ? 'm-[20%] gap-10' : 'm-4 gap-4'}`}>
          <div className={`${isFullscreen ? 'w-14' : 'w-14'} aspect-square border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin`} />
          <div className={`flex flex-col gap-6 ${isFullscreen ? 'text-2xl' : 'text-sm'}`}>
            <h2>Firmware updating</h2>
            <p>
              Do not turn off or unplug your device while update
              <br />is in progress. This may take a few minutes.
            </p>
          </div>
        </div>
        <hr className='w-full my-2' />
      </div>
    </div >
  );
};

export default FakeChromeOS;
