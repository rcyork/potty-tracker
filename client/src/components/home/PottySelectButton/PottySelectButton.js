import React from 'react';

import './PottySelectButton.css';

const PottySelectButton = ({ dog }) => {
  return (
    <button className={`pottySelectButton pottySelectButton--${dog}`}>1</button>
  );
};

export default PottySelectButton;
