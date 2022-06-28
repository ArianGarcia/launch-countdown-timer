import { useEffect, useState } from 'react';

const useCountdown = (targetDate: number) => {
  const newDueTime = 14 * 24 * 60 * 60 * 1000;
  let countDownDate = new Date(targetDate).getTime();

  // Reset the countdown by adding 14 days to the countdown
  while (countDownDate - new Date().getTime() < 0) {
    countDownDate += newDueTime
  }

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };