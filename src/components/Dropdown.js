import React from 'react';
import styled from 'styled-components';
import SelectOption from '../components/select-option';

const Dropdown = ({
  handleOptionClick,
  showOptions,
  setShowOptions,
  placeHolder,
  selectedOption,
  options}) => {
  return (
    <DropdownWrapper>
      <DropdownButton
        onClick={() => setShowOptions((s) => !s)}>
          {selectedOption || placeHolder}
      </DropdownButton>
      
      {showOptions &&
        <SelectOptionDiv>
          {options.map((option, ind) => {
            return (<SelectOption
            option={option}
            index={ind}
            key={ind}
            handleOptionClick={handleOptionClick}
          />)
          })}
      </SelectOptionDiv>}
    </DropdownWrapper>
  )
}

export default Dropdown;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DropdownButton= styled.button`
  width: 300px;
  height: 40px;
  cursor: pointer;
`;

const SelectOptionDiv = styled.div`
  margin-top: 8px;
  min-height: 50px;
  border: 1px solid black;
  width: 300px;
`;
