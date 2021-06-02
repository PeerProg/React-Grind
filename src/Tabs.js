import React from 'react';
import styled from 'styled-components';

const StyledTabWrapper = styled.div`
  display: flex;
  width: 50%;
  font-size: 16px;
  font-weight: 16px;
  margin: auto;
  align-items: center;
  justify-content: center;
`;

const StyledTab = styled.div`
  display: flex;
  border: 2px solid black;
  padding: 4px 24px;

  background-color: ${({ active }) => active && '#94bbf1'};

  :first-child {
    border-right: 0;
  }
  :last-child {
    border-left: 0;
  }
`;

export default function Tabs({items, handleTabClick}) {
  return (
  <StyledTabWrapper>
    {items.map((item, index) => <StyledTab key={index} active={item.active} onClick={handleTabClick}>{item.name}</StyledTab>)}
  </StyledTabWrapper>);
}