import React, { useEffect, useState } from 'react';

export const Item = ({ base, onChange, price, }) => {

  let [count, setCount] = useState(0);

  let sellClick = () => {
    setCount(count - 1);
  };
  let buyClick = () => {
    setCount(Number(count) + 1);
  };

  let changed = (e) => {
    setCount((e.target.value).replace(/^0+/, ''))
  };
  useEffect(() => {
    onChange((prev) => {
      return {
        ...prev,
        [base.name]: {
          price, count
        },
      };
    });
  }, [count]);
  return (
    <div className="col-lg-4 col-sm-6 col-12 px-1 my-1">
      <div className="product bg-white">
        <img className="ml-auto mr-auto" src={base.image} alt="" />
        <h3>{base.name}</h3>
        <p className="product__price">
          <span className="symbol">$</span>
          <span className="price">{(base.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
        <div className="buy-sell d-flex justify-content-between">
          <button disabled={count < 1 ? true : false} onClick={sellClick} className={`sell ${count < 1 ? 'disabled' : ''}`}>Sell</button>
          <input className="quantity" value={count || 0} onChange={changed} type="number" />
          <button onClick={buyClick} className="buy">Buy</button>
        </div>
      </div>
    </div>
  );
};
