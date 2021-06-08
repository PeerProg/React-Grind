import React from 'react';
import styled from 'styled-components';
import SelectOption from '../components/select-option';
import Spacer from '../components/spacer';

const Dummy = () => {
  const handleOptionClick = e => {
    console.log(e.target.value);
  };

  return (
    <StyledWrapper>
      <SelectOption
        option={{ label: 'Tangerine', value: 'Tangerine' }}
        index={0}
        handleOptionClick={handleOptionClick}
      />

      <Spacer height={5} />

      <SelectOption
        option={{ label: 'Orange', value: 'Orange' }}
        index={1}
        handleOptionClick={handleOptionClick}
      />

      <Spacer height={5} />

      <SelectOption
        option={{ label: 'Potato', value: 'Potato' }}
        index={2}
        handleOptionClick={handleOptionClick}
      />

      <Spacer height={5} />

      <SelectOption
        option={{ label: 'Banana', value: 'Banana' }}
        index={3}
        handleOptionClick={handleOptionClick}
      />
    </StyledWrapper>
  );
};

export default Dummy;

const StyledWrapper = styled.div`
  padding: 30px;
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
`;
