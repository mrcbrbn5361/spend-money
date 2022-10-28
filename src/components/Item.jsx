import React, { useEffect, useState } from 'react';

export const Item = ({ base, onChange, price, bank }) => {
  
  let [count, setCount] = useState(0);
  let sellClick = () => {
    setCount(Number(count) - 1);
  };
  let buyClick = () => {
    setCount(Number(count) + 1);
  };
  console.log(bank);

  let changed = (e) => {
    if (((count+1) * price) > bank) {
      
      console.log('stop');
    }
    setCount(e.target.value.replace(/^0+/, '')); //0 в начале убирается
  };

  useEffect(() => {
    onChange((prev) => {
      return {
        ...prev,
        [base.name]: {
          price,
          count,
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
          <span className="price">
            {base.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </p>
        <div className="buy-sell d-flex justify-content-between">
          <button
            disabled={count < 1 ? true : false}
            onClick={sellClick}
            className={`sell ${count < 1 ? 'disabled' : ''}`}>
            Sell
          </button>
          <input className="quantity" value={count || 0} onChange={changed} type="number" />
          <button
            disabled={bank < 2 ? true : false}
            onClick={buyClick}
            className={`buy ${bank < 2 ? 'disabled' : ''}`}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};
