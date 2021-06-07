import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateUserInfo } from '../actions';
import InputField from '../components/input-field';
import Spacer from '../components/spacer';

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [errors, setErrors] = useState([]);

  const passwordValidation = (password) => {
    console.log('password', password);
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
    if (password.length < 10) {
      return setErrors(['Invalid Password']);
    } else if (!password.match(lowerCaseLetters).length) {
      return setErrors(['Invalid Password']);
    } else if (!password.match(upperCaseLetters).length) {
      return setErrors(['Invalid Password']);
    } else if (!password.match(numbers).length) {
      return setErrors(['Invalid Password']);
    } else {
      return;
    }
  };


  console.log('error: ', errors);
  const handleSubmit = ev => {
    passwordValidation(user?.info?.password);
    ev.preventDefault();
  };
  return (
    <StyledPageWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          required
          placeholder="Enter your name"
          handleInputChange={e => {
            dispatch(updateUserInfo({ name: e.target.value }));
          }}
          value={user?.info?.name}
        />
        <Spacer height={18} />
        <InputField
          label="Role"
          type="text"
          placeholder="Enter your role (e.g Software Engineer)"
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
          placeholder="Enter a valid Email address"
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
          placeholder="Enter your passwword"
          handleInputChange={e => {
            dispatch(updateUserInfo({ password: e.target.value }));
          }}
          value={user?.info?.password}
          errors={errors}
        />

        <Spacer height={25} />

        <StyledButton type="submit" disable={!!errors.length}>SUBMIT</StyledButton>
      </StyledForm>
    </StyledPageWrapper>
  );
};

export default User;

const StyledPageWrapper = styled.div`
  display: flex;
`;

const StyledForm = styled.form`
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
  box-sizing: border-box;
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
