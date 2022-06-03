import Order from './components/order';
import Menu from './components/menu';
import { useState } from 'react';


import './App.css';

function App() {
  const [screen, setScreen] = useState('menuScreen');

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


      {screen === 'menuScreen' && <Menu />}
      {screen === 'orderScreen' && <Order />}

    


    </div>
  );
}

export default App;
