import React from 'react';
import styled from 'styled-components';
import Swift from '../assets/swift.jpg';
import LogoPicture from '../assets/logo-with-text.jpeg';

const Icon = ({ imageSrc, altText, imgStyle }) => {
  return (<StyledImage
    src={imageSrc}
    alt={altText}
    style={imgStyle}
  />);
};

const SideBarWithIconsAndText = () => {
  return (
    <StyledSideBarWrapper>
      <StyledAppLogo>
        <Icon imageSrc={Swift} altText="swift-app-logo" imgStyle={{ width: '100px', height: '75px' }} />
        <Icon  imageSrc={LogoPicture} altText="app-logo-picture" imgStyle={{ width: '100px', height: '75px' }} />
        <StyledParagraph>Seyi Aromokeye</StyledParagraph>
      </StyledAppLogo>
      <div>Categories with icons</div>
      <div>Call to action icon button</div>
    </StyledSideBarWrapper>
  )
}

export default SideBarWithIconsAndText;

const StyledSideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
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