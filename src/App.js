import './App.css';
import Tabs from './Tabs';

function App() {
  const items = [{name: 'User', active: true}, {name: 'Privacy', active: false}, {name: 'Done', active: false}]

  const handleTabClick = (e) => {
    console.log('Did I? ', e, e.target.value);
    return ;
  };

  return (
    <div className="App">
      <Tabs items={items} handleTabClick={handleTabClick} />
    </div>
  );
}

export default App;
