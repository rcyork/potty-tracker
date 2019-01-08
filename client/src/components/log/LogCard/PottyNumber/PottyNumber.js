import React from 'react';

import './PottyNumber.css';

const PottyNumber = ({ dog }) => {
  return (
    <button className={`logCard__pottyNumber  logCard__pottyNumber--${dog}`}>
      1
    </button>
  );
};

export default PottyNumber;
