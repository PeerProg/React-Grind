import styled from 'styled-components';
import InputField from './components/input-field';

function App() {
  return (
    <StyledAppWrapper>
      <InputField
        label="Name"
        handleInputChange={() => {}}
        required
        errors={['Is required']}
      />
    </StyledAppWrapper>
  );
}

export default App;

const StyledAppWrapper = styled.div`
  padding: 30px;
  border: 1px solid blue;
  height: 100vh;
  width: 100vw;
`;
