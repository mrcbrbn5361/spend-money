import React, { useEffect, useState } from 'react';

export const Item = ({ data, changeMoney, changeMoney2, changeMoney3, updateMoney }) => {
  const [counter, setCounter] = useState(0);
  let buyClick = () => {
    setCounter(counter + 1);
    // changeMoney(data.price);
  };
  let sellClick = () => {
    setCounter(counter - 1);
    // changeMoney2(data.price);
  };

  let onHandleChange = (event) => {
    // console.log('input changed');
    // console.log(event.target.value);
    setCounter(event.target.value);
    // console.log(counter);
    // changeMoney3(event.target.value * data.price);
  };

  useEffect(() => {
    updateMoney(counter * data.price);
  }, [counter]);
  return (
    <div className="item">
      <img src={data.image} alt="" />
      <div className="item__name">{data.name}</div>
      <div className="item__price">${data.price}</div>
      <div className="counter">
        <button disabled={counter === 0 ? true : false} onClick={sellClick}>
          Sell
        </button>
        <input type="number" value={counter} onChange={onHandleChange} />
        <button onClick={buyClick}>Buy</button>
      </div>
    </div>
  );
};
