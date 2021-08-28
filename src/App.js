import { useEffect, useState } from 'react';
import './App.css';
import { Input } from './components/Input';
import { Item } from './components/Item';
import obj from './myStore';

// function App() {
//   const [money, setMoney] = useState(1000000);
//   const [data, setData] = useState([]);

//   let changeMoney = (greens) => {
//     setMoney(money - greens);
//   };

//   let changeMoney2 = (greens) => {
//     setMoney(money + greens);
//   };

//   let changeMoney3 = (greens) => {
//     setMoney(money - greens);
//   };

//   let updateMoney = (greens) => {
//     setMoney(money - greens);
//   };

//   useEffect(() => {
//     setData(obj.items);
//     // fetch('http://localhost:3000/db.json')
//     //   .then((response) => {
//     //     return response.json();
//     //   })
//     //   .then((data) => {
//     //     setData(data.items);
//     //   });
//   }, []);

//   return (
//     <div className="App">
//       <header>
//         <img src="https://neal.fun/spend/billgates.jpg" alt="" />
//         <h1>Spend Bill Gates' Money</h1>
//       </header>
//       <div className="money">${money}</div>
//       <main>
//         <div className="container">
//           <div className="items__list">
//             {data.map((data) => (
//               <Item
//                 data={data}
//                 changeMoney={changeMoney}
//                 changeMoney2={changeMoney2}
//                 changeMoney3={changeMoney3}
//                 updateMoney={updateMoney}
//               />
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// const items = [
//   { key: 'bigmac', price: 2, title: 'BigMac' },
//   { key: 'car', price: 200, title: 'Car' },
//   { key: 'nbteam', price: 2000, title: 'nbTeam' },
// ];

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
      <div>
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
      </div>
    </div>
  );
}

export default App;
