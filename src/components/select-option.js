import React from 'react';
import styled from 'styled-components';

const SelectOption = ({ option, index, handleOptionClick }) => {
  return (
    <StyledButton
      index={index}
      onClick={handleOptionClick}
      value={option.value}
    >
      {option.label}
    </StyledButton>
  );
};

export default SelectOption;

const StyledButton = styled.button`
  padding: 5px;
  height: 50px;
  width: 300px;
  display: flex;
  border: none;
  background-color: ${({ index }) =>
    index % 2 === 0 ? '#ffffff' : 'lightgrey'};
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  outline: none;
  cursor: pointer;
`;
