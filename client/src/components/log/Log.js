import React from 'react';

import { LogCard } from './LogCard/LogCard';

import moment from 'moment';

import './Log.css';

export const Log = ({ log, dogs }) => {
  const logSortedByDays = log.reduce((acc, letOut) => {
    const dateLabel = moment(letOut.date).format('MMMM Do, YYYY');
    const matchingIndex = acc.findIndex(day => day[0] === dateLabel);
    if (matchingIndex > -1) {
      return acc.map(([day, letOuts], index) => {
        // if this isn't the entry with the same date as the matchingIndex then return that entry
        if (index !== matchingIndex) {
          return [day, letOuts];
        }
        // otherwise add this letOut to the array of letOuts under that date
        return [day, letOuts.concat(letOut)];
      });
    }
    // if there is no matchingDate then create a new accumulator entry with this date and letOut
    return [...acc, [dateLabel, [letOut]]];
  }, []);

  return (
    <div className="log">
      <div>
        <button className="goHomeButton">
          <i className="fas fa-home" />
          home
        </button>
      </div>
      <div className="scrollingLog">
        {logSortedByDays.map(([day, letOuts]) => {
          return (
            <div className="dayOfLetOuts" key={day}>
              <div className="dateLabel">{day}</div>
              <div className="letOuts">
                {letOuts.map(letOut => {
                  return (
                    <LogCard letOut={letOut} dogs={dogs} key={letOut.date} />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
