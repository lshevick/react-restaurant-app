import Order from './components/order';
import MenuList from './components/MenuList';
import DATA from './data';
import { useState } from 'react';


import './App.css';

const INITIAL_STATE = [];

function App() {
  const [screen, setScreen] = useState('menuScreen');
  const [items, setItems] = useState(INITIAL_STATE);

  return (
    <div className="App">
      <header>
        <nav className='navbar'>
          <button className='homepage'>Fujiwara Sushi</button>
          <ul className='nav-list'>
            <li className='nav-item'><button onClick={() => setScreen('menuScreen')}>Menu</button></li>
            <li className='nav-item'><button onClick={() => setScreen('orderScreen')}>Orders</button><span className='order-num'>4</span></li>
          </ul>
        </nav>
      </header>


      {screen === 'menuScreen' && <MenuList DATA={DATA} />}
      {screen === 'orderScreen' && <Order />}

    


    </div>
  );
}

export default App;
