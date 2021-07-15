import React from 'react';
import styled from 'styled-components';
import Spacer from './spacer';

const Timer = () => {
  return (
    <TimerPage>
      <TimerContainer>
        <HourTimer>00  : </HourTimer>
        <MinuteTimer>00  : </MinuteTimer>
        <SecondsTimer>00</SecondsTimer>
      </TimerContainer>
        <Spacer height='20'/>
      <TimerButtons>
        <Button color='green'>Start</Button>
        <Spacer width='15'/>
        <Button color='red'>Stop</Button>
        <Spacer width='15'/>
        <Button color='blue'>Reset</Button>
        <Spacer width='15'/>
        <Button color='orange'>Pause</Button>
      </TimerButtons>
    </TimerPage>
  )
}

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
  width: 90%;
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
  height: 35px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => (color && color)}; 
  color: white;
  border-radius: 5px;
  border-color: ${({ color }) => (color && color)};

  :disabled {
    background-color: grey;
    border-color: grey;
    color: black;
  }
`;
