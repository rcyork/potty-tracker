import React from 'react';

import './PottySelectButton.css';

const PottySelectButton = ({ dogName, currentNumber, updatePottyOption }) => {
  return (
    <button
      className={`pottySelectButton pottySelectButton--${dogName}`}
      onClick={updatePottyOption}
    >
      {currentNumber}
    </button>
  );
};

export default PottySelectButton;
