import React from 'react';

import './SelectPottyNumberButton.css';

export const SelectPottyNumberButton = ({ dog, updatePottyOption }) => {
  return (
    <button
      className={`selectPottyNumber ${dog.color}`}
      onClick={() => updatePottyOption(dog.name, dog.currentNumber)}
    >
      <span className="selectPottyNumber__number">{dog.currentNumber}</span>
      <span className="selectPottyNumber__name">{dog.name}</span>
    </button>
  );
};
