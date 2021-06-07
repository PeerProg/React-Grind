import React from 'react';
import styled from 'styled-components';
import Spacer from '../components/spacer';

const Done = () => {
  return (
    <StyledPageWrapper>
      <StyledTick src="/tick.svg" alt="" />
      <Spacer height={24} />
      <>
        <StyledText>Please verify your email address.</StyledText>
        <StyledText>
          You should have received an email from us already.
        </StyledText>
      </>
    </StyledPageWrapper>
  );
};

export default Done;

const StyledPageWrapper = styled.form`
  width: 900px;
  min-height: 50vh;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  height: 100%;
  display: flex;
  padding: 15px 25px 15px 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const StyledTick = styled.img`
  width: 150px;
  height: 120px;
`;

const StyledText = styled.p`
  color: #00a10c;
  font-size: 20px;
  margin-bottom: 0;
`;
