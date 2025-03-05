import { useUpdateProgress } from '@/contexts/UpdateProgressContext';
import styles from './FakeUpdateWinXP.module.css';
import WindowsXPLogo from '@/public/window-xp-logo.png';
import Image from 'next/image';

export default function FakeUpdateWinXP() {
  const { progress } = useUpdateProgress();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src={WindowsXPLogo.src}
          alt="Windows XP Logo"
          width={80}
          height={40}
        />
        <div className={styles.updateText}>
          <p>Installing Windows Updates...{progress}%</p>
          <p>Do not turn off or unplug your computer.</p>
        </div>
      </div>
    </div>
  );
}
