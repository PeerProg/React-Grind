import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import InputField from './input-field';

const SliderAndInputCombo = ({max, min, step=1}) => {
  const [sliderValue, setSliderValue] = useState('');
  const [numberValue, setNumberValue] = useState(0);
  const [numberInputFocused, setNumberInputFocused] = useState(false);
  const numberInputRef = useRef();
  let timerId = null;

  useEffect(() => {
    return () => {
      clearTimeout(timerId);
    }
  }, [timerId])

  const handleNumberInputChange = (e) => {
    let number = Number(e.target.value);
    if (number >= min && number <= max) {
      setNumberValue(number);
      timerId = setTimeout(() => {
        handleSliderInputChange(e);
      }, 2000);
    }
  }

  const handleSliderInputChange = (e) => {
    setSliderValue(e.target.value);
  }

  const getNumberInputStyle = () => {
    if (numberInputFocused) {
      return { 
        width: '200px',
        height: '80px',
        fontSize: '70px',
        fontWeight: 400,
        textAlign: 'center'
      }
    }

    return { 
      border: 'none',
      height: '80px',
      fontSize: '70px',
      fontWeight: 400,
      textAlign: 'center'
    };
  };

  return (
    <StyledCard>
      <InputField
        isForSlider
        type="number"
        id="numberInput"
        name="numberInput"
        min={min}
        max={max}
        step={step}
        value={numberValue}
        handleInputChange={handleNumberInputChange}
        inputStyle={getNumberInputStyle()}
        onBlur={() => setNumberInputFocused(false)}
        onFocus={() => setNumberInputFocused(true)}
        ref={numberInputRef}
      />
      <InputField
        isForSlider
        type="range"
        id="slider"
        name="numberInput"
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        handleInputChange={handleSliderInputChange}
        inputStyle={{ width: '100%', padding: 0 }}
      />
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
