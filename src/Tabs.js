import React from 'react';
import styled from 'styled-components';

const StyledTabWrapper = styled.div`
  display: flex;
  width: fit-content;
  font-size: 16px;
  font-weight: 16px;
  margin: auto;
  align-items: center;
  justify-content: center;
  border-left: 2px solid black;
  border-right: 2px solid black;
  border-top: none;
  border-bottom: none;

  :first-child {
    border-left: none;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: none;
  border-left: 2px solid black;
  cursor: pointer;
  width: 150px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;

  background-color: ${({ active }) => active && '#94bbf1'};
`;

export default function Tabs({ items, handleTabClick, activeTab }) {
  return (
    <StyledTabWrapper>
      {items.map((item, index) => (
        <StyledButton
          key={index}
          active={item === activeTab}
          onClick={handleTabClick}
          id={item}
        >
          {item}
        </StyledButton>
      ))}
    </StyledTabWrapper>
  );
}
