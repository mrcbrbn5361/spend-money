import React from 'react';

const TotalInfoItem = ({ totalInfo }) => {
  return (
    <div className="totalInfo__item d-flex align-items-center justify-content-center">
      <h5 className="m-2">{totalInfo.name}</h5>
      <span className="m-2">x{totalInfo.count}</span>
      <span className="m-2">${totalInfo.count * totalInfo.price}</span>
    </div>
  );
};

export default TotalInfoItem;
