import { useEffect, useState } from 'react';
import './App.css';
import { Input } from './components/Input';
import { Item } from './components/Item';
import obj from './myStore';

const money = 100000000000;

function App() {
  const [info, setInfo] = useState({});
  console.log(info);

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(obj.items);
  }, []);
  return (
    <div className="App">
      {/* <div>
        Money:{''}
        {money - Object.values(info).reduce((res, cur) => res + cur.count * cur.price, 0)}
      </div>

      <div>
        {items.map((item) => (
          <Input
            key={item.id}
            onChange={setInfo}
            price={item.price}
            itemKey={item.name}
            title={item.name}
          />
        ))}
      </div> */}

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
          $100,000,000,000
        </div>
        <div className="row mt-2 px-2">
          <div className="col-lg-4 col-sm-6 col-12 px-1 my-2">
            <div className="product bg-white">
              <img className="ml-auto mr-auto" src="https://neal.fun/spend/images/big-mac.jpg" alt="" />
              <h3>Бургер</h3>
              <p className="product__price"><span className="symbol">$</span>2<span className="price"></span></p>
              <div className="buy-sell d-flex justify-content-between">
                <button className="sell">Продать</button>
                <input className="quantity" type="number" value="0" />
                <button className="buy">Купить</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 px-1 my-2">
            <div className="product bg-white">
              <img className="ml-auto mr-auto" src="https://neal.fun/spend/images/big-mac.jpg" alt="" />
              <h3>Бургер</h3>
              <p className="product__price"><span className="symbol">$</span>2<span className="price"></span></p>
              <div className="buy-sell d-flex justify-content-between">
                <button className="sell">Продать</button>
                <input className="quantity" type="number" value="0" />
                <button className="buy">Купить</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 px-1 my-2">
            <div className="product bg-white">
              <img className="ml-auto mr-auto" src="https://neal.fun/spend/images/big-mac.jpg" alt="" />
              <h3>Бургер</h3>
              <p className="product__price"><span className="symbol">$</span>2<span className="price"></span></p>
              <div className="buy-sell d-flex justify-content-between">
                <button className="sell">Продать</button>
                <input className="quantity" type="number" value="0" />
                <button className="buy">Купить</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 px-1 my-2">
            <div className="product bg-white">
              <img className="ml-auto mr-auto" src="https://neal.fun/spend/images/big-mac.jpg" alt="" />
              <h3>Бургер</h3>
              <p className="product__price"><span className="symbol">$</span>2<span className="price"></span></p>
              <div className="buy-sell d-flex justify-content-between">
                <button className="sell">Продать</button>
                <input className="quantity" type="number" value="0" />
                <button className="buy">Купить</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 px-1 my-2">
            <div className="product bg-white">
              <img className="ml-auto mr-auto" src="https://neal.fun/spend/images/big-mac.jpg" alt="" />
              <h3>Бургер</h3>
              <p className="product__price"><span className="symbol">$</span>2<span className="price"></span></p>
              <div className="buy-sell d-flex justify-content-between">
                <button className="sell">Продать</button>
                <input className="quantity" type="number" value="0" />
                <button className="buy">Купить</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 px-1 my-2">
            <div className="product bg-white">
              <img className="ml-auto mr-auto" src="https://neal.fun/spend/images/big-mac.jpg" alt="" />
              <h3>Бургер</h3>
              <p className="product__price"><span className="symbol">$</span>2<span className="price"></span></p>
              <div className="buy-sell d-flex justify-content-between">
                <button className="sell">Продать</button>
                <input className="quantity" type="number" value="0" />
                <button className="buy">Купить</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 px-1 my-2">
            <div className="product bg-white">
              <img className="ml-auto mr-auto" src="https://neal.fun/spend/images/big-mac.jpg" alt="" />
              <h3>Бургер</h3>
              <p className="product__price"><span className="symbol">$</span>2<span className="price"></span></p>
              <div className="buy-sell d-flex justify-content-between">
                <button className="sell">Продать</button>
                <input className="quantity" type="number" value="0" />
                <button className="buy">Купить</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 px-1 my-2">
            <div className="product bg-white">
              <img className="ml-auto mr-auto" src="https://neal.fun/spend/images/big-mac.jpg" alt="" />
              <h3>Бургер</h3>
              <p className="product__price"><span className="symbol">$</span>2<span className="price"></span></p>
              <div className="buy-sell d-flex justify-content-between">
                <button className="sell">Продать</button>
                <input className="quantity" type="number" value="0" />
                <button className="buy">Купить</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
