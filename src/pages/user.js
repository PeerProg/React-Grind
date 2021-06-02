import React from 'react';
import styled from 'styled-components';
import InputField from '../components/input-field';
import Spacer from '../components/spacer';

const User = () => {
  return (
    <StyledPageWrapper>
      <StyledForm>
        <InputField label="Name" type="text" required />
        <Spacer height={18} />
        <InputField label="Role" type="text" />
        <Spacer height={18} />

        <InputField label="Email" type="email" required />
        <Spacer height={18} />

        <InputField label="Password" type="password" required />

        <Spacer height={25} />

        <StyledButton>SUBMIT</StyledButton>
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
`;
