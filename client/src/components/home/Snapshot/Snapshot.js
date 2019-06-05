import React from 'react';
import moment from 'moment';

import './Snapshot.css';

export const Snapshot = ({ mostRecentLetOut, dogs }) => {
  if (!mostRecentLetOut) {
    return <p>no let out</p>;
  }
  return (
    <div className={`snapshot ${dogs.length >= 5 ? 'fiveOrMore' : null}`}>
      <span className="snapshot__time">
        {moment(mostRecentLetOut.date).format('LT')}
      </span>
      <ul className="snapshot__pottyNumbers">
        {mostRecentLetOut.pottyNumbers.map(dog => {
          const dogIsPresent = dogs.find(pupper => pupper.name === dog.name);
          if (!dogIsPresent) {
            return null;
          }
          const color = dogs.find(pupper => pupper.name === dog.name).color;
          return dogIsPresent ? (
            <li
              key={dog.name}
              className={`snapshot__pottyNumbers__pottyNumber ${
                color ? color : null
              }`}
            >
              {dog.pottyNumber}
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};
