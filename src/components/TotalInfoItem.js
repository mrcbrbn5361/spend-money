import React from 'react';

const TotalInfoItem = ({ totalInfo }) => {
  let adjustNum = (num) => {
    //сокращение чисел
    if (num < 1_000) {
      return num;
    } else if (num < 1_000_000) {
      return (num / 1_000).toFixed(1) % 1 === 0
        ? Math.round(num / 1000) + 'k'
        : (num / 1_000).toFixed(1) + 'k';
    } else if (num < 1_000_000_000) {
      return (num / 1_000_000).toFixed(1) % 1 === 0
        ? Math.round(num / 1_000_000) + 'm'
        : (num / 1_000_000).toFixed(1) + 'm';
    } else if (num < 1_000_000_000_000) {
      return (num / 1_000_000_000).toFixed(1) % 1 === 0
        ? Math.round(num / 1_000_000_000) + 'b'
        : (num / 1_000_000_000).toFixed(1) + 'b';
    }
  };
  return (
    <div className="total-info__item">
      <div className="total-info__name">{totalInfo.name}</div>
      <div className="total-info__amount">x{adjustNum(totalInfo.count)}</div>
      <div className="total-info__price">${adjustNum(totalInfo.count * totalInfo.price)}</div>
    </div>
  );
};

export default TotalInfoItem;
