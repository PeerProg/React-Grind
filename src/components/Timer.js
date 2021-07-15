import { useEffect, useReducer, useRef } from 'react';
import styled from 'styled-components';
import Spacer from './spacer';

const initialState = {
  hh: 0,
  mm: 0,
  ss: 0,
  isStarted: false,
  isPaused: false,
  isStopped: false
};

const timerReducer = (state, action) => {
  switch (action.type) {
    case 'START_TIMER':
      return { ...state, isStarted: true };
    case 'INCREMENT_SECONDS_TIMER':
      if (state.ss < 60) {
        return {
          ...state,
          ss: state.ss + 1
        };
      }
      if (state.ss === 60) {
        if (state.mm === 60) {
          return {
            ...state,
            mm: 0,
            hh: state.hh + 1
          };
        }

        return {
          ...state,
          mm: state.mm + 1,
          ss: 0
        };
      }
      break;
    case 'RESET_TIMER':
      return initialState;
    case 'STOP_TIMER':
      return { ...state, isStarted: false, isStopped: true };
    case 'PAUSE_TIMER':
      return {
        ...state,
        isStarted: !state.isStarted,
        isPaused: !state.isPaused
      };
    case 'INCREMENT_MINUTE_TIMER':
      return { ...state, mm: state.mm + 1 };
    default:
      return state;
  }
};

const Timer = () => {
  const [{ hh, mm, ss, isStarted, isPaused, isStopped }, dispatch] = useReducer(
    timerReducer,
    initialState
  );

  const timerInterval = useRef();

  useEffect(() => {
    if (isStarted && !isStopped) {
      timerInterval.current = setInterval(() => {
        dispatch({ type: 'INCREMENT_SECONDS_TIMER' });
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval.current);
    };
  }, [isStarted, ss, isStopped]);

  const startTimer = () => {
    dispatch({ type: 'START_TIMER' });
  };

  const stopTimer = () => {
    dispatch({ type: 'STOP_TIMER' });
  };

  const resetTimer = () => {
    dispatch({ type: 'RESET_TIMER' });
  };

  const pauseTimer = () => {
    dispatch({ type: 'PAUSE_TIMER' });
  };

  return (
    <TimerPage>
      <TimerContainer>
        <HourTimer>{hh.toString().length < 2 ? `0${hh}` : hh}: </HourTimer>
        <MinuteTimer>{mm.toString().length < 2 ? `0${mm}` : mm}: </MinuteTimer>
        <SecondsTimer>{ss.toString().length < 2 ? `0${ss}` : ss}</SecondsTimer>
      </TimerContainer>
      <Spacer height='20' />
      <TimerButtons>
        <Button color='green' onClick={startTimer} disabled={isStopped}>
          Start
        </Button>
        <Spacer width='15' />
        <Button color='red' onClick={stopTimer} disabled={isStopped}>
          Stop
        </Button>
        <Spacer width='15' />
        <Button color='blue' onClick={resetTimer}>
          Reset
        </Button>
        <Spacer width='15' />
        <Button color='orange' onClick={pauseTimer} disabled={isStopped}>
          {isPaused ? 'Continue' : 'Pause'}
        </Button>
      </TimerButtons>
    </TimerPage>
  );
};

export default Timer;

const TimerPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150px;
  font-weight: 900;
`;

const HourTimer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
`;

const MinuteTimer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
`;

const SecondsTimer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
`;

const TimerButtons = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  flex: 1;
  height: 45px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color && color};
  color: white;
  border-radius: 5px;
  border-color: ${({ color }) => color && color};

  :disabled {
    background-color: grey;
    border-color: grey;
    color: black;
  }
`;
