import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Item } from './components/Item';
import TotalInfoItem from './components/TotalInfoItem';
import store from './myStore';
import { setItems } from './redux/slices/ItemSlice';

function App() {
  const dispatch = useDispatch();

  const { money, items, info } = useSelector((state) => state.item);

  let bank = money - Object.values(info).reduce((res, cur) => res + cur.count * cur.price, 0);

  useEffect(() => {
    dispatch(setItems(store.items));
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
            <Item key={item.id} bank={bank} base={item} price={item.price} />
          ))}
        </div>

        {bank < 100_000_000_000 ? (
          <div className="conclusion mt-2 bg-white text-center pt-3 pb-4">
            <h2 className="pt-3 pb-4 mb-0">Your Receipt</h2>
            <div className="total-info">
              {Object.values(info)
                .filter((item) => item.count > 0)
                .map((item) => (
                  <TotalInfoItem totalInfo={item} key={item.id} />
                ))}

              <div className="total-info__total">
                <div className="total-info__total-name">TOTAL</div>
                <div className="total-info__total-price">
                  $
                  {totalSum()
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default App;
