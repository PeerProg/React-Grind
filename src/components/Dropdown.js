import React, { useState, useEffect } from 'react';
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
  options
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedOptions, setDisplayedOptions] = useState([]);

  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      setDisplayedOptions(options);
    } else {
      const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setDisplayedOptions(filteredOptions);
    }
    return () => {
      setDisplayedOptions([]);
    };
  }, [options, searchQuery]);

  const handleSearchInputChange = e => {
    e.preventDefault();
    setSearchQuery(e.target.value.trim());
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={() => setShowOptions(s => !s)}>
        {selectedOption || placeHolder}

        {!showOptions ? (
          <StyledImage
            src={DownChevron}
            alt="down-chevron-button"
            style={{ width: '15px', height: '15px' }}
          />
        ) : (
          <StyledImage
            src={UpChevron}
            alt="up-chevron-button"
            style={{ width: '15px', height: '15px' }}
          />
        )}
      </DropdownButton>

      {showOptions && (
        <SelectOptionDiv>
          <SearchWrapperDiv>
            <SearchInput
              type="search"
              onChange={handleSearchInputChange}
              value={searchQuery}
              placeholder="Enter a search term"
            />
          </SearchWrapperDiv>
          {displayedOptions.map((option, ind) => {
            return (
              <SelectOption
                option={option}
                index={ind}
                key={ind}
                handleOptionClick={e => {
                  handleOptionClick(e);
                  setSearchQuery('');
                }}
              />
            );
          })}
        </SelectOptionDiv>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DropdownButton = styled.button`
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

const StyledImage = styled.img``;

const SearchWrapperDiv = styled.div`
  padding: 5px;
  width: 100%;
  min-height: 50px;
  border: none;
  box-sizing: border-box;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;
  border: 2px solid black;
  border-radius: 3px;
  font-size: 18px;
`;
