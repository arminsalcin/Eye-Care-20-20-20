import React, { useEffect, useState } from 'react';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { AiOutlineReload } from 'react-icons/ai';
import Button from '../components/Button/Button';
import ToggleButton from '../components/ToggleButton/ToggleButton';
import useTimer from '../hooks/Timer';
import { showNotification } from '../utils';

import {
  ButtonContainer,
  Container,
  Divider,
  Heading,
  InfoText,
  Link,
  TimeText,
} from './styledMainScreen';
import {
  defaultTime,
  restNotification,
  restTime,
  workNotification,
} from '../config';

type TimeObjectType = {
  minutes: number;
  seconds: number;
};

type NotificationObjectType = {
  title: string;
  body: string;
};

const MainScreen: React.FC = () => {
  const [isBreak, setIsBreak] = useState(false);
  const [autoBreak, setAutoBreak] = useState(false);
  const [
    start,
    outTime,
    reset,
    pause,
    finished,
    setTimer,
    isStarted,
  ] = useTimer(defaultTime);

  const timeHandler = (
    time: TimeObjectType,
    notification: NotificationObjectType
  ) => {
    setTimer(time);
    setIsBreak(!isBreak);
    showNotification(notification);
  };

  useEffect(() => {
    finished(() => {
      if (!isBreak) {
        //if timer is finished and its work time

        timeHandler(restTime, restNotification);
        setTimeout(() => start(), 500);
      } else {
        //if timer is finished and its rest time

        timeHandler(defaultTime, workNotification);
        if (autoBreak) {
          setTimeout(() => start(), 500);
        }
      }
    });
  }, [finished, setTimer]);

  const onReset = () => {
    reset();
    setIsBreak(false);
  };

  return (
    <Container>
      <Heading>Made for your eyes care 👀</Heading>
      <Divider />
      <TimeText>
        {outTime.minutes}:{outTime.seconds}
      </TimeText>

      {isBreak ? (
        <InfoText>Rest your priceless eyes, and watch 20 feet away</InfoText>
      ) : (
        <InfoText>Work with happiness not with headache 😎</InfoText>
      )}

      <ButtonContainer>
        {!isStarted ? (
          <Button onClick={() => start()}>
            <BsFillPlayFill size={70} color="white" style={{ marginLeft: 4 }} />
          </Button>
        ) : (
          <Button onClick={() => pause()}>
            <BsFillPauseFill size={70} color="white" />
          </Button>
        )}

        <ToggleButton
          label={'Auto reset after break'}
          handleToggle={(e) => setAutoBreak(e.target.checked)}
        />

        <Button onClick={onReset}>
          <AiOutlineReload size={60} color="white" />
        </Button>
      </ButtonContainer>

      <Link
        href="https://www.safeatworkca.com/safety-articles/20-20-20-rule/"
        target="_blank"
        rel="noreferrer"
      >
        What is 20-20-20 rule ?
      </Link>
    </Container>
  );
};

export default MainScreen;
