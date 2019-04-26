import React from 'react';

import './SelectPottyNumberButton.css';

export const SelectPottyNumberButton = ({ dog }) => {
  return (
    <button className={`selectPottyNumber ${dog.color}`}>
      <span className="selectPottyNumber__number">{dog.currentNumber}</span>
      <span className="selectPottyNumber__name">{dog.name}</span>
    </button>
  );
};
