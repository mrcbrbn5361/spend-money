import { useEffect, useState } from 'react';
import './App.css';
import { Input } from './components/Input';
import { Item } from './components/Item';
import obj from './myStore';

const money = 100_000_000_000;

function App() {
  console.log((123456789).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  const [info, setInfo] = useState({});

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(obj.items);
  }, []);
  return (
    <div className="App">
      <header>
        <div className="container">
          <div width="1000" className="header">
            <a href="">Adilet.fun</a>
          </div>
        </div>
      </header>

      <div className="container p-0">
        <h1 className="bill">
          <img alt="Image of Bill Gates" src="https://neal.fun/spend/billgates.jpg" className="imgbil" />
          Spend Bill Gates' Money
        </h1>
        <div className="countzz">
          ${(money - Object.values(info).reduce((res, cur) => res + cur.count * cur.price, 0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        <div className="row mt-2 px-2">
          {items.map((item) => (
            <Item key={item.id} onChange={setInfo} itemKey={item.name} base={item} price={item.price}
              title={item.name} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
