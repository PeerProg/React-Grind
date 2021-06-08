import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Spacer from '../components/spacer';

const Done = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userDataString = localStorage.getItem('data');

  useEffect(() => {
    if (!userDataString) {
      history.push('/user');
    }
  }, [history, userDataString]);

  useEffect(() => {
    const userData = userDataString ? JSON.parse(userDataString) : {};
    dispatch({ type: 'SET_ACTIVE_TAB', data: 'Done' });
    console.log('User Data', userData);
    return () => {
      localStorage.removeItem('data');
    };
  }, [dispatch, userDataString]);

  return userDataString ? (
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
  ) : null;
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
