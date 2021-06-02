import styled from 'styled-components';
import InputField from './components/input-field';
import { useState } from 'react';
import Tabs from './Tabs';

function App() {
  const [activeTab, setActiveTab] = useState('User');

  const items = ['User', 'Privacy', 'Done'];

  const handleTabClick = e => {
    setActiveTab(e.target.id);
  };

  return (
    <AppWrapper>
      <Tabs
        items={items}
        handleTabClick={handleTabClick}
        activeTab={activeTab}
      />
      <InputField
        label="Name"
        handleInputChange={() => {}}
        required
        errors={['Is required']}
      />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
