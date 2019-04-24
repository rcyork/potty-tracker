import React from 'react';

import './NamePlate.css';

export const NamePlate = ({ dog }) => {
  return (
    <div className={`namePlate ${dog.color}`}>
      <span className="dogName">{dog.name}</span>
      <button className="deleteDogButton">x</button>
    </div>
  );
};
