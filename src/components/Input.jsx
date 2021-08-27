import React, { useEffect, useState } from 'react';

export const Input = ({ itemKey, title, price, onChange }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    onChange((prev) => {
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
      <input value={count} onChange={(e) => setCount(e.target.value)} type="number" />
    </div>
  );
};
