
'use client'

import { useState, useEffect } from 'react';
import styles from './FakeUpdateWinXP.module.css';
import WindowsXPLogo from '@/public/window-xp-logo.png';
import Image from 'next/image';



export default function FakeUpdateWinXP() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
            if (prev >= 100) {
            clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
