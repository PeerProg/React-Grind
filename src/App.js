import styled from 'styled-components';
import { useState } from 'react';
import InputField from './components/input-field';
import Tabs from './components/Tabs';

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
