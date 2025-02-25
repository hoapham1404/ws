    import { FC } from 'react';
    import ChromeOSLogo from "@/public/chrome-logo.png";
    import Image from 'next/image';

    const FakeChromeOS: FC = () => {
    return (
        <div className="w-full h-full bg-[#1f1f1f] flex-col items-center justify-center text-white">
        <div className="flex flex-col items-start justify-center h-full p-16">
            <div className='flex items-center justify-center'>
                <div className="flex items-center justify-center">
                <Image
                    src={ChromeOSLogo}
                    alt="Chrome OS"
                    width={30}
                    height={30}
                />
                </div>
                <div className='ml-4'>chromeOS</div>
            </div>

            <hr className='w-full my-2' />
            
            <div className="flex items-center gap-4">
            <div className="w-14 h-14 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            <div className='flex flex-col gap-6'>
                <h2 className="text-sm">Firmware updating</h2>
                <p className="text-sm">
                    Do not turn off or unplug your device while update
                    <br />is in progress. This may take a few minutes.
                </p>
            </div>
            </div>
        <hr className='w-full my-2' />
        </div>
        </div>
    );
    };

    export default FakeChromeOS;
