'use client'

import { createContext, useContext, useState, useEffect } from 'react';

interface UpdateProgressContextType {
  minutes: number;
  startPercentage: number;
  progress: number;
  timeRemaining: string;
  setMinutes: (minutes: number) => void;
  setStartPercentage: (percentage: number) => void;
  handleRestart: () => void;
}

const UpdateProgressContext = createContext<UpdateProgressContextType | null>(null);

export function UpdateProgressProvider({ children }: { children: React.ReactNode }) {
  const [minutes, setMinutes] = useState(1);
  const [startPercentage, setStartPercentage] = useState(0);
  const [progress, setProgress] = useState(startPercentage);
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    if (progress >= 100) {
      setTimeRemaining('Complete');
      return;
    }

    const totalProgress = 100 - startPercentage;
    const intervalTime = (minutes * 60 * 1000) / totalProgress;
    const remainingProgress = 100 - progress;
    const remainingTimeMs = (remainingProgress * intervalTime);
    
    // Calculate minutes and seconds remaining
    const minutesLeft = Math.floor(remainingTimeMs / 60000);
    const secondsLeft = Math.floor((remainingTimeMs % 60000) / 1000);
    
    setTimeRemaining(`${minutesLeft}:${secondsLeft.toString().padStart(2, '0')} remaining`);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [minutes, startPercentage, progress]);

  const handleRestart = () => {
    setProgress(startPercentage);
  };

  return (
    <UpdateProgressContext.Provider value={{
      minutes,
      startPercentage,
      progress,
      timeRemaining,
      setMinutes,
      setStartPercentage,
      handleRestart
    }}>
      {children}
    </UpdateProgressContext.Provider>
  );
}

export function useUpdateProgress() {
  const context = useContext(UpdateProgressContext);
  if (!context) {
    throw new Error('useUpdateProgress must be used within UpdateProgressProvider');
  }
  return context;
} 