import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Spacer from './spacer';

const InputField = ({
  errors,
  handleInputChange,
  label,
  required,
  type,
  value,
  placeholder
}) => {
  return (
    <StyledInputWrapper>
      <StyledLabelHolder>
        <StyledLabel htmlFor={label}>{label}</StyledLabel>
        {required && (
          <>
            <Spacer width={4} />
            <StyledRequiredIndicator>*</StyledRequiredIndicator>
          </>
        )}
      </StyledLabelHolder>

      <Spacer height={2} />

      <StyledInput
        id={label}
        onChange={handleInputChange}
        value={value}
        type={type}
        placeholder={placeholder}
      />

      <Spacer height={2} />

      {errors.length > 0 && (
        <>
          {errors.map((err, idx) => (
            <StyledErrorRow key={idx}>{err}</StyledErrorRow>
          ))}
        </>
      )}
    </StyledInputWrapper>
  );
};

export default InputField;

InputField.propTypes = {
  errors: PropTypes.array,
  handleInputChange: PropTypes.func,
  label: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string
};

InputField.defaultProps = {
  errors: [],
  handleInputChange: () => {},
  label: '',
  required: false,
  type: 'text',
  value: ''
};

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabelHolder = styled.span`
  display: flex;
  align-items: center;
  height: 30px;
`;

const StyledLabel = styled.label`
  font-weight: bold;
`;

const StyledRequiredIndicator = styled.p`
  color: red;
  font-weight: bold;
`;

const StyledInput = styled.input`
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid black;
  height: 30px;
  font-size: 15px;
  line-height: 18px;
  margin: 0;
`;

const StyledErrorRow = styled.p`
  color: red;
  font-weight: bold;
  font-style: italic;
  font-size: 11px;
  padding-left: 3px;
`;
