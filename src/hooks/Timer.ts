import { useState, useRef, useCallback, useEffect } from 'react';

type TimeObjectType = {
  minutes: number;
  seconds: number;
};

type TimeStringObjectType = {
  minutes: string;
  seconds: string;
};

type TimerReturnType = [
  () => void,
  TimeStringObjectType,
  () => void,
  () => void,
  (func: any) => void,
  (arg0: TimeObjectType) => void,
  boolean
];

const useTimer = (startTime: TimeObjectType): TimerReturnType => {
  const twoChars = useCallback((number) => {
    return `${+number < 10 ? `0${number}` : number}`;
  }, []);

  const timer = useRef<number>(0);
  const [outTime, setTime] = useState({
    minutes: twoChars(startTime.minutes),
    seconds: twoChars(startTime.seconds),
  });
  const [isStarted, setIsStarted] = useState(false);
  const hasFinished = +outTime.minutes === 0 && +outTime.seconds === 0;

  const finished = useCallback(
    (func) => {
      if (hasFinished) {
        return func && func();
      }
    },
    [hasFinished]
  );

  const reset = useCallback(() => {
    setTime({
      minutes: twoChars(startTime.minutes),
      seconds: twoChars(startTime.seconds),
    });
  }, [startTime, twoChars]);

  const setTimer = useCallback(
    (time) => {
      setTime({
        minutes: twoChars(time.minutes),
        seconds: twoChars(time.seconds),
      });
    },
    [twoChars]
  );

  const start = useCallback(() => {
    setIsStarted(true);
    clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      setTime((time) => ({
        minutes: twoChars(
          +time.seconds === 0 ? +time.minutes - 1 : +time.minutes
        ),
        seconds: twoChars(+time.seconds === 0 ? 59 : +time.seconds - 1),
      }));
    }, 1000);
  }, [twoChars]);

  const pause = useCallback(() => {
    setIsStarted(false);
    clearInterval(timer.current);
  }, []);

  useEffect(() => {
    if (hasFinished) {
      setIsStarted(false);
      clearInterval(timer.current);
    }

    return () => clearInterval(timer.current);
  }, [hasFinished]);

  return [start, outTime, reset, pause, finished, setTimer, isStarted];
};

export default useTimer;
