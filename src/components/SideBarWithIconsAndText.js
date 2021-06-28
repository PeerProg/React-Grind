import React, { useState } from 'react';
import styled from 'styled-components';
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

const Icon = ({ imageSrc, altText, imgStyle }) => {
  return <StyledImage src={imageSrc} alt={altText} style={imgStyle} />;
};

const MenuItem = ({ icon, label, color, sideBarCollapsed }) => {
  return (
    <StyledMenuRoot>
      <FontAwesomeIcon icon={icon} color={color} />
      {!sideBarCollapsed && (
        <>
          <Spacer width={12} />
          <StyledParagraph>{label}</StyledParagraph>
        </>
      )}
    </StyledMenuRoot>
  );
};

const SideBarWithIconsAndText = () => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);

  return (
    <StyledSideBarWrapper>
      <StyledAppLogo sideBarCollapsed={sideBarCollapsed}>
        <Icon
          imageSrc="/marvel-logo.png"
          altText="swift-app-logo"
          imgStyle={{ width: '100%', height: '100%' }}
        />
      </StyledAppLogo>
      {arrOfMenuItems.map((item, idx) => (
        <MenuItem
          icon={item.icon}
          label={item.label}
          key={idx}
          color={item.color}
          sideBarCollapsed={sideBarCollapsed}
        />
      ))}

      <Spacer height={50} />

      <StyledCta
        onClick={() => {
          setSideBarCollapsed(c => !c);
        }}
      >
        Toggle
      </StyledCta>
    </StyledSideBarWrapper>
  );
};

export default SideBarWithIconsAndText;

const StyledMenuRoot = styled.button`
  display: flex;
  width: 280px;
  height: 40px;
  align-items: center;
  outline: none;
  cursor: pointer;
  border: none;
  background-color: white;
`;

const StyledSideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 10px;
  border: 1px solid blue;
  height: 500px;
`;

const StyledAppLogo = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 60px;
`;

const StyledImage = styled.img``;

const StyledParagraph = styled.p``;

const StyledCta = styled.button`
  width: 120px;
  height: 40px;
  font-size: 24px;
`;
