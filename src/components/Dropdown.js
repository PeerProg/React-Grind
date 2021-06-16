import React from 'react';
import styled from 'styled-components';
import SelectOption from '../components/select-option';
import DownChevron from '../assets/down-chevron.svg';
import UpChevron from '../assets/up-arrow-angle.svg';

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

          {!showOptions ?
            <StyledImage src={DownChevron} alt="down-chevron-button" style={{ width: '15px', height: '15px' }} /> :
            <StyledImage src={UpChevron} alt="up-chevron-button"  style={{ width: '15px', height: '15px' }} />
            }
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
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-weight: 400;
  font-size: 16px;
`;

const SelectOptionDiv = styled.div`
  margin-top: 8px;
  min-height: 50px;
  border: 1px solid black;
  width: 300px;
`;

const StyledImage = styled.img`
`;
