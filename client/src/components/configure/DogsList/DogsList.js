import React from 'react';

import { NamePlate } from './NamePlate/NamePlate';

export const DogsList = ({ dogs }) => {
  return (
    <div className="dogsList">
      <ul>
        {dogs.map(dog => (
          <li key={dog.name}>
            <NamePlate dog={dog} />
          </li>
        ))}
      </ul>
    </div>
  );
};
