import styled from 'styled-components';

const Card = props => {
  return (
    <StyledCard width={props.width} height={props.height}>
      {props.children}
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  display: flex;
  width: ${({ width }) => (width ? width : '400px')};
  height: ${({ height }) => (height ? height : '400px')};
  box-sizing: border-box;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
