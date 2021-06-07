import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { updateUserInfo, updateUserPrivacy } from '../actions';
import Spacer from '../components/spacer';
import CheckedBox from '../checkbox.svg';
import BlankCheckBox from '../blank-check-box.svg';

const Privacy = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const privacy = useSelector(state => state.user.privacy);
  const userData = useSelector(state => state.user);

  useEffect(() => {
    dispatch({ type: 'SET_ACTIVE_TAB', data: 'Privacy' });
  }, [dispatch]);

  const { productUpdateComms, otherProductsUpdateComms } = privacy;
  const handleSubmit = ev => {
    ev.preventDefault();
    localStorage.setItem('data', JSON.stringify(userData));
    dispatch(updateUserInfo({ name: '', email: '', role: '', password: '' }));
    dispatch(
      updateUserPrivacy({
        productUpdateComms: false,
        otherProductsUpdateComms: false
      })
    );
    history.push('/done');
  };

  return (
    <StyledPageWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <Spacer height={18} />

        <StyledCheckBoxWrapper>
          {productUpdateComms ? (
            <StyledImage
              src={CheckedBox}
              alt="checked-checkbox"
              style={{ width: '15px', height: '15px' }}
              onClick={() =>
                dispatch(updateUserPrivacy({ productUpdateComms: false }))
              }
            />
          ) : (
            <StyledImage
              src={BlankCheckBox}
              alt="blank-checkbox"
              style={{ width: '15px', height: '15px' }}
              onClick={() =>
                dispatch(updateUserPrivacy({ productUpdateComms: true }))
              }
            />
          )}
          <div>Recieve updates about Tray.io product by email</div>
        </StyledCheckBoxWrapper>

        <Spacer height={18} />

        <StyledCheckBoxWrapper>
          {otherProductsUpdateComms ? (
            <StyledImage
              src={CheckedBox}
              alt="checked-checkbox"
              style={{ width: '15px', height: '15px' }}
              onClick={() =>
                dispatch(updateUserPrivacy({ otherProductsUpdateComms: false }))
              }
            />
          ) : (
            <StyledImage
              src={BlankCheckBox}
              alt="blank-checkbox"
              style={{ width: '15px', height: '15px' }}
              onClick={() =>
                dispatch(updateUserPrivacy({ otherProductsUpdateComms: true }))
              }
            />
          )}
          <div>
            Recieve communication by email for other products created by the
            Tray.io team
          </div>
        </StyledCheckBoxWrapper>

        <Spacer height={18} />

        <StyledButton type="submit">SUBMIT</StyledButton>
      </StyledForm>
    </StyledPageWrapper>
  );
};

export default Privacy;

const StyledPageWrapper = styled.div`
  display: flex;
`;

const StyledForm = styled.form`
  width: 900px;
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

const StyledImage = styled.img`
  margin-right: 16px;
`;

const StyledCheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;
