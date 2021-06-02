import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import User from './pages/user';
import Privacy from './pages/privacy';
import Done from './pages/done';
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
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/done" component={Done} />
      </Switch>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
