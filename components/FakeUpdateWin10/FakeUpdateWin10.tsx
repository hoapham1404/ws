import { useUpdateProgress } from '@/contexts/UpdateProgressContext';
import styles from './FakeUpdateWin10.module.css';

export default function FakeUpdateWin10() {
  const { progress, timeRemaining } = useUpdateProgress();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.spinner}></div>
        <div className={styles.text}>
          <p>Working on updates {progress}% complete</p>
          <p>{timeRemaining}</p>
          <p>Please keep your computer on.</p>
        </div>
        <p className={styles.warning}>Your computer will restart automatically.</p>
      </div>
    </div>
  );
}
