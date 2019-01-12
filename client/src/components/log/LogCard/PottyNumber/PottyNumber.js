import React from 'react';

import './PottyNumber.css';

const PottyNumber = ({ dogName }) => {
  return (
    <button
      className={`logCard__pottyNumber  logCard__pottyNumber--${dogName}`}
    >
      1
    </button>
  );
};

export default PottyNumber;
