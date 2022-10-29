import { useEffect, useState } from 'react';
import './App.css';
import { Item } from './components/Item';
import TotalInfoItem from './components/TotalInfoItem';
import store from './myStore';

const money = 100_000_000_000;

function App() {
  const [info, setInfo] = useState({});
  const [items, setItems] = useState([]);

  let bank = money - Object.values(info).reduce((res, cur) => res + cur.count * cur.price, 0);
  useEffect(() => {
    setItems(store.items);
  }, []);

  let totalSum = () => {
    let arr = Object.values(info).filter((item) => item.count > 0);
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
      totalSum = totalSum + arr[i].count * arr[i].price;
    }
    return totalSum;
  };
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

        <div className="totalInfo row text-center mb-5">
          <h2>Your Receipt</h2>
          {Object.values(info)
            .filter((item) => item.count > 0)
            .map((item) => (
              <TotalInfoItem totalInfo={item} />
            ))}
          <div className="total-price">
            <h3>Total</h3>
            <span>{totalSum()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
