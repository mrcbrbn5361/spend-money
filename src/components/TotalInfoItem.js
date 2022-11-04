import React from 'react';

const TotalInfoItem = ({ totalInfo }) => {
  let adjustPrice = (num) => {
    if (num < 1000) {
      return num;
    } else if (num < 1000000) {
      return (num / 1000).toFixed(1) % 1 === 0
        ? Math.round(num / 1000) + 'k'
        : (num / 1000).toFixed(1) + 'k';
    } else if (num < 1000000000) {
      return (num / 1000000).toFixed(1) % 1 === 0
        ? Math.round(num / 1000000) + 'm'
        : (num / 1000000).toFixed(1) + 'm';
    } else if (num < 1000000000000) {
      return (num / 1000000000).toFixed(1) % 1 === 0
        ? Math.round(num / 1000000000) + 'b'
        : (num / 1000000000).toFixed(1) + 'b';
    }
  };
  return (
    <div className="total-info__item">
      <div className="total-info__name">{totalInfo.name}</div>
      <div className="total-info__amount">x{adjustPrice(totalInfo.count)}</div>
      <div className="total-info__price">${adjustPrice(totalInfo.count * totalInfo.price)}</div>
    </div>
  );
};

export default TotalInfoItem;
