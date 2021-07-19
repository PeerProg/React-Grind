import React from 'react';
import styled, { css } from 'styled-components';
import CheckedBox from '../checkbox.svg';
import BlankCheckBox from '../blank-check-box.svg';

const TodoItem = ({ todo, toggleCompletion }) => {
  return (
    <StyledRoot>
      {todo.done ? (
        <StyledImage
          src={CheckedBox}
          alt="checked-checkbox"
          style={{ width: '15px', height: '15px' }}
          onClick={() => {
            toggleCompletion(todo.id);
          }}
        />
      ) : (
        <StyledImage
          src={BlankCheckBox}
          alt="blank-checkbox"
          style={{ width: '15px', height: '15px' }}
          onClick={() => {
            toggleCompletion(todo.id);
          }}
        />
      )}
      <StyledPara done={todo.done}>{todo.title}</StyledPara>
    </StyledRoot>
  );
};

export default TodoItem;

const StyledRoot = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  margin-right: 16px;
`;

const StyledPara = styled.p`
  font-size: 22px;
  ${({ done }) =>
    done &&
    css`
      color: red;
      text-decoration: line-through;
    `};
`;
