import React from 'react';

import './NamePlate.css';

export const NamePlate = ({ dog, onDogDeleted, roomKey }) => {
  return (
    <div className={`namePlate ${dog.color}`} key={dog.name}>
      <span className="dogName">{dog.name}</span>
      <button
        className="deleteDogButton"
        onClick={() => onDogDeleted(dog.name, roomKey)}
      >
        <i className="fas fa-times" />
      </button>
    </div>
  );
};
