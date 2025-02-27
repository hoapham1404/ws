'use client';

import { useUpdateProgress } from '@/app/contexts/UpdateProgressContext';
import styles from './FakeUpdateWin11.module.css';

export default function FakeUpdateWin11() {
  const { progress } = useUpdateProgress();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.spinner}></div>
        <div className={styles.text}>
          <p>Working on updates</p>
          <p>{progress}% complete</p>
        </div>
        <p className={styles.warning}>Don&apos;t turn off your computer</p>
      </div>
    </div>    
  );
}
