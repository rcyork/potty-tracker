import React from 'react';

import moment from 'moment';

import './LogCard.css';

export const LogCard = ({ letOut, dogs }) => {
  const fiveOrLess = dogs.length <= 5;
  return (
    <div className={`logCard ${fiveOrLess ? 'fiveOrLess' : null}`}>
      <span className="logCard__time">{moment(letOut.date).format('LT')}</span>
      <ul className="logCard__pottyNumbers">
        {letOut.pottyNumbers.map(dog => {
          const isValidDog = dogs.find(pupper => pupper.name === dog.name);
          return isValidDog ? (
            <li
              key={dog.name}
              className={`logCard__pottyNumber ${isValidDog.color}`}
            >
              {dog.pottyNumber}
            </li>
          ) : null;
        })}
      </ul>
      <i className="fas fa-times" />
    </div>
  );
};
