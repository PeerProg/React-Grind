import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const StyledTabWrapper = styled.div`
  display: flex;
  width: fit-content;
  font-size: 16px;
  font-weight: 16px;
  align-items: center;
  justify-content: center;
  border-left: 2px solid black;
  border-right: 2px solid black;
  border-top: none;
  border-bottom: none;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;

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

function Tabs({ items, handleTabClick, activeTab }) {
  const history = useHistory();
  return (
    <StyledTabWrapper>
      {items.map((item, index) => (
        <StyledButton
          key={index}
          active={item === activeTab}
          onClick={e => {
            handleTabClick(e);
            history.push(`/${e.target.id.toLowerCase()}`);
          }}
          id={item}
        >
          {item}
        </StyledButton>
      ))}
    </StyledTabWrapper>
  );
}

const mapStateToProps = state => {
  return {
    activeTab: state.tab.activeTab
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleTabClick: e => {
      dispatch({ type: 'SET_ACTIVE_TAB', data: e.target.id });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
