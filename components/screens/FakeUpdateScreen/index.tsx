import Header from '@/components/Header'
import BottomPanel from '@/components/Layout/BottomPanel'
import LeftSidePanel from '@/components/Layout/LeftSidePanel'
import PreviewBox from '@/components/Layout/PreviewBox'
import RightSidePanel from '@/components/Layout/RightSidePanel'
import FakeUpdateWin10 from '@/components/FakeUpdateWin10/FakeUpdateWin10'
import { FakeUpdateScreenBottom } from './FakeUpdateScreenBottom'
import { usePathname } from 'next/navigation'
import FakeAndroidUpdate from '@/components/FakeAndroidUpdate/FakeAndroidUpdate'
import { FakeUpdateScreenLeft } from './FakeUpdateScreenLeft'
import FakeUpdateWin11 from '@/components/FakeUpdateWin11/FakeUpdateWin11'
import FakeUpdateWinXP from '@/components/FakeUpdateWinXP/FakeUpdateWinXP'
import FakeOSUpdate from '@/components/FakeOSUpdate/FakeOSUpdate'
import FakeUbuntu from '@/components/FakeUbuntu/FakeUbuntu'
import FakeChromeOS from '@/components/FakeChromeOS/FakeChromeOS'
import { FakeUpdateScreenRight } from './FakeUpdateScreenRight'
import { UpdateProgressProvider } from '@/contexts/UpdateProgressContext'

export default function FakeUpdateScreen() {
  const pathname = usePathname();

  return (
    <UpdateProgressProvider>
      <div className="min-h-screen p-3 md:p-5  text-black">
        <Header />
        <main className="max-w-7xl mx-auto relative flex flex-col md:block">
          {/* Left panel containing color selection options */}
          <LeftSidePanel>
            <FakeUpdateScreenLeft />
          </LeftSidePanel>

          {/* Main preview area showing the selected color */}
          <PreviewBox>
            {pathname === '/fake-update-windows-10' && <FakeUpdateWin10 />}
            {pathname === '/fake-update-windows-xp' && <FakeUpdateWinXP />}
            {pathname === '/fake-android-update' && <FakeAndroidUpdate />}
            {pathname === '/fake-windows-11-update-screen' && <FakeUpdateWin11 />}
            {pathname === '/fake-update-mac-os-x' && <FakeOSUpdate />}
            {pathname === '/fake-update-ubuntu-22-04' && <FakeUbuntu />}
            {pathname === '/fake-update-chrome-os' && <FakeChromeOS />}
          </PreviewBox>

          {/* Right panel containing color settings and controls */}
          <RightSidePanel>
            <FakeUpdateScreenRight />
          </RightSidePanel>

          {/* Bottom panel with screen navigation options */}
          <BottomPanel>
            <FakeUpdateScreenBottom />
          </BottomPanel>
        </main>
      </div>
    </UpdateProgressProvider>
  )
}
