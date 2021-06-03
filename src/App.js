import styled from 'styled-components';
import { Provider } from 'react-redux';
import InputField from './components/input-field';
import Tabs from './components/Tabs';
import store from './store';

function App() {
  const items = ['User', 'Privacy', 'Done'];

  return (
    <Provider store={store}>
      <AppWrapper>
        <Tabs
          items={items}
        />
        <InputField
          label="Name"
          handleInputChange={() => {}}
          required
          errors={['Is required']}
        />
      </AppWrapper>
    </Provider>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
