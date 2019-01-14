import React from 'react';

import './PottyNumber.css';

const PottyNumber = ({ dogName, number, updateLogOption }) => {
  return (
    <button
      className={`logCard__pottyNumber  logCard__pottyNumber--${dogName}`}
      onClick={updateLogOption}
    >
      {number}
    </button>
  );
};

export default PottyNumber;
