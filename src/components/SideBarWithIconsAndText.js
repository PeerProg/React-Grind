import React from 'react';
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

const Icon = ({ imageSrc, altText, imgStyle }) => {
  return <StyledImage src={imageSrc} alt={altText} style={imgStyle} />;
};

const MenuItem = ({ icon, label, color }) => {
  return (
    <StyledMenuRoot>
      <FontAwesomeIcon icon={icon} color={color} />
      <Spacer width={12} />
      <StyledParagraph>{label}</StyledParagraph>
    </StyledMenuRoot>
  );
};

const SideBarWithIconsAndText = () => {
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

  return (
    <StyledSideBarWrapper>
      <StyledAppLogo>
        <Icon
          imageSrc="/marvel-logo.png"
          altText="swift-app-logo"
          imgStyle={{ width: '300px', height: '75px' }}
        />
        <StyledParagraph>Seyi Aromokeye</StyledParagraph>
      </StyledAppLogo>
      {arrOfMenuItems.map((item, idx) => (
        <MenuItem
          icon={item.icon}
          label={item.label}
          key={idx}
          color={item.color}
        />
      ))}
    </StyledSideBarWrapper>
  );
};

export default SideBarWithIconsAndText;

const StyledMenuRoot = styled.div`
  display: flex;
  width: 280px;
  align-items: center;
  font-family: Goldman;
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
`;

const StyledImage = styled.img``;

const StyledParagraph = styled.p``;
