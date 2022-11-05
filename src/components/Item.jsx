import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setInfo } from '../redux/slices/MainSlice';

export const Item = ({ base, bank }) => {
  let price = base.price

  const dispatch = useDispatch()
  
  let [count, setCount] = useState(0);


  let sellClick = () => {
    setCount(Number(count) - 1);

  };
  let buyClick = () => {
    if (price <= bank) {
      setCount(Number(count) + 1);
    }
  };

  let inputChanged = (e) => {
    if (e.target.value <= 0) {
      setCount("0") 
    } else if (e.target.value < count) {
      setCount(e.target.value.replace(/^0+/, '')) //0 в начале убирается

    } else if (((e.target.value) * price) > bank+(count*price)) {
      let newBank = Math.floor((bank + (count * price)) / price)
      // автозаполнение инпута при вводе значения выше возможнсти банка)
      setCount(newBank)

    } else {
      setCount(e.target.value.replace(/^0+/, '')); //0 в начале убирается
    }
    
  };

  

  useEffect(() => {
    let newObj = {
      [base.id]: {
        id: base.id,
        name: base.name,
        price,
        count,
      },
    }
    dispatch(setInfo(newObj))
  }, [count]);

  
  return (
    <div className="col-lg-4 col-sm-6 col-12 px-1 my-1">
      <div className="product bg-white">
        <img className="ml-auto mr-auto" src={base.image} alt="" />
        <h3>{base.name}</h3>
        <p className="product__price">
          <span className="symbol">$</span>
          <span className="price">
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </p>
        <div className="buy-sell d-flex justify-content-between">
          <button
            disabled={count < 1 ? true : false}
            onClick={sellClick}
            className={`sell ${count < 1 ? 'disabled' : ''}`}>
            Sell
          </button>
          <input className="quantity" value={count || 0} onChange={inputChanged} type="number" />
          <button
            disabled={bank < price ? true : false}
            onClick={buyClick}
            className={`buy ${bank < price ? 'disabled' : ''}`}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};
