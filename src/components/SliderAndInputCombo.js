import { useState } from 'react';
import styled from 'styled-components';

const SliderAndInputCombo = () => {
  const [value, setValue] = useState(50);

  return (
    <StyledCard>
      <StyledInput type="number" id="numberInput" name="numberInput" min="0" max="100" value={value} onChange={(e)=> setValue(e.target.value)} />
      <StyledSlider type="range" id="slider" name="slider" min="0" max="100" value={value} onChange={(e)=> setValue(e.target.value)}/>
    </StyledCard>
  )
}

export default SliderAndInputCombo;

const StyledCard = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 2px 15px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

const StyledInput = styled.input`
  width: 40%;
  margin-bottom: 20px;
`;
const StyledSlider = styled.input`
  width: 70%;
`;