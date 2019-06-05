import React from 'react';

import { NamePlate } from './NamePlate/NamePlate';

import './DogsList.css';

export const DogsList = ({ dogs, onDogDeleted, roomKey }) => {
  return (
    <ul className="dogsList">
      {dogs.map(dog => (
        <li key={dog.name}>
          <NamePlate dog={dog} onDogDeleted={onDogDeleted} roomKey={roomKey} />
        </li>
      ))}
    </ul>
  );
};
