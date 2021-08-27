import { useEffect, useState } from 'react';
import './App.css';
import { Item } from './components/Item';
import obj from './myStore';

function App() {
  const [money, setMoney] = useState(1000000);
  const [data, setData] = useState([]);

  let changeMoney = (greens) => {
    setMoney(money - greens);
  };

  let changeMoney2 = (greens) => {
    setMoney(money + greens);
  };

  let changeMoney3 = (greens) => {
    setMoney(money - greens);
  };

  let updateMoney = (greens) => {
    setMoney(money - greens);
  };

  useEffect(() => {
    setData(obj.items);
    // fetch('http://localhost:3000/db.json')
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setData(data.items);
    //   });
  }, []);

  return (
    <div className="App">
      <header>
        <img src="https://neal.fun/spend/billgates.jpg" alt="" />
        <h1>Spend Bill Gates' Money</h1>
      </header>
      <div className="money">${money}</div>
      <main>
        <div className="container">
          <div className="items__list">
            {data.map((data) => (
              <Item
                data={data}
                changeMoney={changeMoney}
                changeMoney2={changeMoney2}
                changeMoney3={changeMoney3}
                updateMoney={updateMoney}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
