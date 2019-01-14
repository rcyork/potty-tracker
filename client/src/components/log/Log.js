import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

import DateLabel from './DateLabel/DateLabel';
import LogCard from './LogCard/LogCard';

import './Log.css';

const Log = ({ state, updateLogOption, deleteLogEntry }) => {
  let logSortedByDays = state.letOuts.reduce((acc, item) => {
    const dateLabel = moment(item.dateAndTime).format('MMMM Do, YYYY');
    const matchingIndex = acc.findIndex(accItem => accItem[0] === dateLabel);
    if (matchingIndex > -1) {
      return acc.map(([day, items], index) => {
        if (index !== matchingIndex) {
          return [day, items];
        }
        return [day, items.concat(item)];
      });
    }

    return [...acc, [dateLabel, [item]]];
  }, []);

  logSortedByDays = logSortedByDays.sort((a, b) => (a[0] > b[0] ? -1 : 1));

  return (
    <div className="logWrap">
      <NavLink className="cancel" exact to="/">
        cancel
      </NavLink>
      <div className="scrollingLog">
        {logSortedByDays.map(([day, items]) => {
          return (
            <>
              <DateLabel day={day} />
              <div className="logCardsGridGap" key={day}>
                {items.map(item => {
                  return (
                    <LogCard
                      key={item.dateAndTime}
                      dateAndTime={item.dateAndTime}
                      leo={item.leo}
                      lucy={item.lucy}
                      updateLogOption={updateLogOption}
                      deleteLogEntry={() => deleteLogEntry(item.dateAndTime)}
                    />
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Log;
