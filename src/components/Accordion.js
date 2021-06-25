import styled from 'styled-components';
import Card from './Card';
import DownChevron from '../assets/down-chevron.svg';
import UpChevron from '../assets/up-arrow-angle.svg';

const Icon = ({showContent}) => {
  return !showContent ? (
    <StyledImage
      src={DownChevron}
      alt="down-chevron-button"
      style={{ width: '15px', height: '15px' }}
    />
  ) : (
    <StyledImage
      src={UpChevron}
      alt="up-chevron-button"
      style={{ width: '15px', height: '15px' }}
    />
  )
}

const Accordion = ({title, content, setShowContent, showContent}) => {


  const handleContentDisplay = () => {
    setShowContent(prev => !prev);
  };

  return (
    <StyledCard width="250px" height="100%">
      <StyledHeader onClick={handleContentDisplay}>
        <StyledTitle>{title}</StyledTitle>
        <Icon showContent={showContent}/>
      </StyledHeader>
      {showContent && <StyledContent>{content}</StyledContent>}
    </StyledCard>
  )
}

export default Accordion;

const StyledCard = styled(Card)`
  margin: 10px 2px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTitle = styled.div`
  display: flex;
`;

const StyledImage = styled.img``;

const StyledContent = styled.div`
  margin-top: 15px;
`;