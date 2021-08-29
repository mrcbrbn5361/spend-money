import React, { useEffect, useState } from 'react';

export const Input = ({ itemKey, title, price, onChange }) => {
  let [count, setCount] = useState(0);
  // count = Number(count)

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
      console.log(prev);
      return {
        ...prev,
        [itemKey]: { price, title, count },
      };
    });
  }, [count]);
  return (
    <div>
      <div>
        {title} - {price}$
      </div>
      <button disabled={count < 1 ? true : false} onClick={sellClick}>-</button>
      <input value={count || 0} onChange={changed} type="number" />
      <button onClick={buyClick}>+</button>

    </div>
  );
};
