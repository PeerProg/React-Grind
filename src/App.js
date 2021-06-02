import { useState } from 'react';
import styled from 'styled-components';
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
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
