import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateUserInfo } from '../actions';
import InputField from '../components/input-field';
import Spacer from '../components/spacer';

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  console.log('User Deets', user);
  const handleSubmit = ev => {
    ev.preventDefault();
  };

  return (
    <StyledPageWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          required
          handleInputChange={e => {
            dispatch(updateUserInfo({ name: e.target.value }));
          }}
          value={user?.info?.name}
        />
        <Spacer height={18} />
        <InputField
          label="Role"
          type="text"
          handleInputChange={e => {
            dispatch(updateUserInfo({ role: e.target.value }));
          }}
          value={user?.info?.role}
        />
        <Spacer height={18} />

        <InputField
          label="Email"
          type="email"
          required
          handleInputChange={e => {
            dispatch(updateUserInfo({ email: e.target.value }));
          }}
          value={user?.info?.email}
        />
        <Spacer height={18} />

        <InputField
          label="Password"
          type="password"
          required
          handleInputChange={e => {
            dispatch(updateUserInfo({ password: e.target.value }));
          }}
          value={user?.info?.password}
        />

        <Spacer height={25} />

        <StyledButton type="submit">SUBMIT</StyledButton>
      </StyledForm>
    </StyledPageWrapper>
  );
};

export default User;

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 50vw;
  min-height: 50vh;
  border-radius: 5px;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  height: 50px;
  width: 200px;
  background-color: #00a10c;
  color: #ffffff;
  border-radius: 7px;
  border: none;
  margin-left: auto;
  box-shadow: 4px 4px 4px #888;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
`;
