import React from 'react';

import { Link } from 'react-router-dom';

import { LogCard } from './LogCard/LogCard';

import moment from 'moment';

import './Log.css';

export const Log = ({
  logs,
  dogs,
  deleteLogEntry,
  roomKey,
  updateLogOption,
}) => {
  if (!logs || logs.length === 0) {
    return (
      <div className="log">
        <div>
          <Link to="/" className="goHomeButton">
            <i className="fas fa-home" />
            home
          </Link>
        </div>{' '}
        <p className="emptyLogMessage">you have no let outs</p>{' '}
      </div>
    );
  }
  const logsSortedByDays = logs.reduce((acc, letOut) => {
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
        <Link to="/:roomKey" className="goHomeButton">
          <i className="fas fa-home" />
          home
        </Link>
      </div>

      <div className="scrollingLog">
        {logsSortedByDays.map(([day, letOuts]) => {
          return (
            <div className="dayOfLetOuts" key={day}>
              <div className="dateLabel">{day}</div>
              <div className="letOuts">
                {letOuts.map(letOut => {
                  return (
                    <LogCard
                      updateLogOption={updateLogOption}
                      letOut={letOut}
                      dogs={dogs}
                      key={letOut.date}
                      deleteLogEntry={deleteLogEntry}
                      roomKey={roomKey}
                    />
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
