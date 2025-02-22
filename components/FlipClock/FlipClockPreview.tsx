"use client";

import { useEffect, useState } from 'react';
import styles from './FlipClockPreview.module.css';

const FlipClockPreview = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className={styles.flipClock}>
      <div className={styles.timeUnit}>
        <div className={styles.digit}>{hours[0]}</div>
        <div className={styles.digit}>{hours[1]}</div>
      </div>
      <div className={styles.separator}>:</div>
      <div className={styles.timeUnit}>
        <div className={styles.digit}>{minutes[0]}</div>
        <div className={styles.digit}>{minutes[1]}</div>
      </div>
      <div className={styles.separator}>:</div>
      <div className={styles.timeUnit}>
        <div className={styles.digit}>{seconds[0]}</div>
        <div className={styles.digit}>{seconds[1]}</div>
      </div>
    </div>
  );
};

export default FlipClockPreview;
