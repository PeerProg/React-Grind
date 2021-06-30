import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faUser,
  faTrash,
  faLock,
  faHouseUser
} from '@fortawesome/free-solid-svg-icons';
import Spacer from './spacer';

const arrOfMenuItems = [
  {
    icon: faCoffee,
    label: 'Coffee',
    color: 'brown'
  },
  {
    icon: faUser,
    label: 'User',
    color: 'green'
  },
  {
    icon: faTrash,
    label: 'Delete',
    color: 'red'
  },
  {
    icon: faLock,
    label: 'Security',
    color: 'blue'
  },
  {
    icon: faHouseUser,
    label: 'House',
    color: 'orange'
  }
];

const MenuItem = ({ icon, label, color, sideBarCollapsed }) => {
  return (
    <StyledMenuRoot>
      <FontAwesomeIcon icon={icon} color={color} />
      <Spacer width={12} />
      <MenuItemLabel sideBarCollapsed={sideBarCollapsed}>{label}</MenuItemLabel>
    </StyledMenuRoot>
  );
};

const SideBarWithIconsAndText = () => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);

  return (
    <StyledSideBarWrapper sideBarCollapsed={sideBarCollapsed}>
      <StyledAppLogo
        sideBarCollapsed={sideBarCollapsed}
        src="/marvel-logo.png"
        alt="marvel-logo"
      />
      <MenuItemsWrapper sideBarCollapsed={sideBarCollapsed}>
        {arrOfMenuItems.map((item, idx) => (
          <MenuItem
            icon={item.icon}
            label={item.label}
            key={idx}
            color={item.color}
            sideBarCollapsed={sideBarCollapsed}
          />
        ))}
      </MenuItemsWrapper>

      <Spacer height={50} />

      <StyledCta
        onClick={() => {
          setSideBarCollapsed(c => !c);
        }}
        sideBarCollapsed={sideBarCollapsed}
      >
        Toggle
      </StyledCta>
    </StyledSideBarWrapper>
  );
};

export default SideBarWithIconsAndText;

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
`;

const StyledMenuRoot = styled.button`
  display: flex;
  height: 40px;
  align-items: center;
  outline: none;
  cursor: pointer;
  border: none;
  background-color: white;
`;

const StyledSideBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 10px;
  border: 1px solid blue;
  height: 500px;
  transition: all 1.2s;

  ${({ sideBarCollapsed }) =>
    sideBarCollapsed &&
    css`
      width: 80px;
      height: 650px;
    `}
`;

const MenuItemsWrapper = styled.div`
  ${({ sideBarCollapsed }) =>
    sideBarCollapsed &&
    css`
      margin-top: 230px;
    `}
`;

const StyledAppLogo = styled.img`
  width: 100%;
  height: 60px;
  transition: all 1.2s;

  ${({ sideBarCollapsed }) =>
    sideBarCollapsed &&
    css`
      width: 280px;
      height: 90px;
      transform: rotate(-90deg) translate(-32%, -110%);
    `}
`;

const MenuItemLabel = styled.p`
  visibility: ${({ sideBarCollapsed }) =>
    sideBarCollapsed ? 'hidden' : 'visible'};
  animation: ${({ sideBarCollapsed }) => (sideBarCollapsed ? fadeOut : fadeIn)}
    1.2s linear;
  transition: visibility 1.2s linear;
`;

const StyledCta = styled.button`
  width: 120px;
  height: 40px;
  font-size: 24px;
  cursor: pointer;
  transition: all 1.2s;

  ${({ sideBarCollapsed }) =>
    sideBarCollapsed &&
    css`
      transform: rotate(-90deg);
      margin-left: -40px;
    `}
`;
