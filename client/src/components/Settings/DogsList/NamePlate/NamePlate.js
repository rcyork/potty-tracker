import React from 'react';

import './NamePlate.css';

export const NamePlate = ({ dog, onDogDeleted }) => {
  return (
    <div className={`namePlate ${dog.color}`} key={dog.name}>
      <span className="dogName">{dog.name}</span>
      <button
        className="deleteDogButton"
        onClick={() => onDogDeleted(dog.name)}
      >
        <i className="fas fa-times" />
      </button>
    </div>
  );
};
