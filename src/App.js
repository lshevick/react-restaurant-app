import Order from './components/order';
import MenuList from './components/MenuList';
import Homescreen from './components/Homescreen';
import DATA from './data';
import { useState } from 'react';


import './App.css';

const INITIAL_STATE = [];

function App() {
  const [screen, setScreen] = useState('homescreen');
  const [order, setOrder] = useState(INITIAL_STATE);

  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });


  const addToOrder = (item) => {
    const orderItem = { ...item };
    if (!order.find(i => i.name === orderItem.name)) {
      orderItem.amount = 1;
      setOrder([...order, orderItem]);
      // console.log('first time', orderItem);
    } else {
      const index = order.findIndex((e) => e.name === orderItem.name);
      // console.log('already added', order[index])
      order[index].amount = order[index].amount + 1;
      order[index].price = order[index].price + orderItem.price;
    }
  }

  const removeFromOrder = (id) => {
    const updatedOrder = [...order];
    const index = updatedOrder.findIndex(item => item.id === id);
    updatedOrder.splice(index, 1);
    setOrder(updatedOrder);
  }

  const checkOrder = (
    order.length === 0 ? <span></span> : <span className='order-num'>{order.length}</span>
  )

  return (
    <div className="App">
      <header>
        <nav className='navbar'>
          <button className='homepage' onClick={() => setScreen('homescreen')}>Fujiwara Sushi</button>
          <ul className='nav-list'>
            <li className='nav-item'><button onClick={() => setScreen('menuScreen')}>Menu</button></li>
            <li className='nav-item'><button onClick={() => setScreen('orderScreen')}>Order</button>
              {checkOrder}</li>
          </ul>
        </nav>
      </header>


      {screen === 'menuScreen' && <MenuList DATA={DATA} addToOrder={addToOrder} formatter={formatter} />}
      {screen === 'orderScreen' && <Order order={order} removeFromOrder={removeFromOrder} formatter={formatter} />}
      {screen === 'homescreen' && <Homescreen />}




    </div>
  );
}

export default App;
