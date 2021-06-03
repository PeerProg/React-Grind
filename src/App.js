import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import User from './pages/user';
import Privacy from './pages/privacy';
import Done from './pages/done';
import { Provider } from 'react-redux';
import Tabs from './components/Tabs';
import store from './store';

function App() {
  const items = ['User', 'Privacy', 'Done'];

  return (
    <Provider store={store}>
      <AppWrapper>
        <Tabs items={items} />
        <Switch>
          <Route path="/user" component={User} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/done" component={Done} />
        </Switch>
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
