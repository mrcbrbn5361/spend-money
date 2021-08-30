import { useEffect, useState } from 'react';
import './App.css';
import { Item } from './components/Item';
import store from './myStore';

const money = 100_000_000_000;

function App() {
  // console.log('render app');
  const [info, setInfo] = useState({});
  const [items, setItems] = useState([]);

  let bank = money - Object.values(info).reduce((res, cur) => res + cur.count * cur.price, 0);

  useEffect(() => {
    setItems(store.items);
  }, []);
  return (
    <div className="App">
      <header>
        <div className="container">
          <div width="1000" className="header">
            <a href="#">Adilet.fun</a>
          </div>
        </div>
      </header>

      <div className="container p-0">
        <h1 className="bill">
          <img
            alt="Image of Bill Gates"
            src="https://neal.fun/spend/billgates.jpg"
            className="imgbil"
          />
          Spend Bill Gates' Money
        </h1>
        <div className="countzz">${bank.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
        <div className="row mt-2 px-2">
          {items.map((item) => (
            <Item key={item.id} bank={bank} onChange={setInfo} base={item} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
