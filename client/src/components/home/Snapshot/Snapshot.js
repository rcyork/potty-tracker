import React from 'react';
import moment from 'moment';

import './Snapshot.css';

export const Snapshot = ({ mostRecentLetOut, dogs }) => {
  return (
    <div className="snapshot">
      <span className="snapshot__time">
        {moment(mostRecentLetOut.date).format('LT')}
      </span>
      <ul className="snapshot__pottyNumbers">
        {mostRecentLetOut.pottyNumbers.map(dog => {
          const color = dogs.find(pupper => pupper.name === dog.name).color;
          return (
            <li
              key={dog.name}
              className={`snapshot__pottyNumbers__pottyNumber ${
                color ? color : null
              }`}
            >
              {dog.pottyNumber}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
