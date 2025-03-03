'use client'

import { useUpdateProgress } from '@/pages/contexts/UpdateProgressContext';
import styles from './FakeAndroidUpdate.module.css';

export default function FakeAndroidUpdate() {
    const { progress } = useUpdateProgress();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.androidLogo}>
                    <svg viewBox="0 0 24 24" width="100" height="100">
                        <path
                            fill="white"
                            d="M6,18c0,0.55 0.45,1 1,1h1v3.5c0,0.83 0.67,1.5 1.5,1.5s1.5-0.67 1.5-1.5V19h2v3.5c0,0.83 0.67,1.5 1.5,1.5s1.5-0.67 1.5-1.5V19h1c0.55,0 1,-0.45 1,-1V8H6v10zM3.5,8C2.67,8 2,8.67 2,9.5v7c0,0.83 0.67,1.5 1.5,1.5S5,17.33 5,16.5v-7C5,8.67 4.33,8 3.5,8zm17,0c-0.83,0 -1.5,0.67 -1.5,1.5v7c0,0.83 0.67,1.5 1.5,1.5s1.5,-0.67 1.5,-1.5v-7c0,-0.83 -0.67,-1.5 -1.5,-1.5zm-4.97,-5.84l1.3,-1.3c0.2,-0.2 0.2,-0.51 0,-0.71c-0.2,-0.2 -0.51,-0.2 -0.71,0l-1.48,1.48C13.85,1.23 12.95,1 12,1c-0.96,0 -1.86,0.23 -2.66,0.63L7.85,0.15c-0.2,-0.2 -0.51,-0.2 -0.71,0c-0.2,0.2 -0.2,0.51 0,0.71l1.31,1.31C6.97,3.26 6,5.01 6,7h12c0,-1.99 -0.97,-3.75 -2.47,-4.84zM10,5H9V4h1v1zm5,0h-1V4h1v1z"
                        />
                    </svg>
                </div>
                <div className={styles.updateText}>Installing system update</div>
                <div className={styles.percentage}>{progress}%</div>
                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
