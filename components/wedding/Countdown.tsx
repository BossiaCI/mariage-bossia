'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

type TimeLeft = {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeRemaining(endtime: Date): TimeLeft {
  const total = endtime.getTime() - new Date().getTime();

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
}

export default function Countdown({ targetDate }: { targetDate: string }) {

 const t = useTranslations('Countdown');

  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeRemaining(new Date(targetDate))
  );

  useEffect(() => {

    setMounted(true);

    const interval = setInterval(() => {
      const t = getTimeRemaining(new Date(targetDate));

      if (t.total <= 0) {
        clearInterval(interval);
      }

      setTimeLeft(t);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // 👇 prevent SSR mismatch
  if (!mounted) {
    return null; // or skeleton loader
  }

  const pad = (n: number) => String(n).padStart(2, '0');

  if (timeLeft.total <= 0) {
    return (
      <div className="text-center text-xl font-light">
        🎉 {t('dayIsHere')}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-4 text-center ml-4 mr-4 mt-20 mr-3 ml-3">
      <TimeBox label="Days" value={timeLeft.days} />
      <TimeBox label="Hours" value={pad(timeLeft.hours)} />
      <TimeBox label="Minutes" value={pad(timeLeft.minutes)} />
      <TimeBox label="Seconds" value={pad(timeLeft.seconds)} />
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow p-4">
      <div className="text-3xl font-semibold">{value}</div>
      <div className="text-sm uppercase tracking-wide text-gray-500 sm:text-base text-xs">
        {label}
      </div>
    </div>
  );
}