import React from 'react';
import styled from 'styled-components';

const Dropdown = ({handleOptionClick, showOptions, setShowOptions, placeHolder, selectedOption, options}) => {
  return (
    <DropdownWrapper>
      <DropdownButton>Dropdown Component</DropdownButton>
    </DropdownWrapper>
  )
}

export default Dropdown;

const DropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DropdownButton= styled.button`
  width: 300px;
  height: 40px;
`;
