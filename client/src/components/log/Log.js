import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

import DateLabel from './DateLabel/DateLabel';
import LogCard from './LogCard/LogCard';

import './Log.css';

const Log = ({ state }) => {
  const logSortedByDays = state.letOuts.reduce((acc, item) => {
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
                      time={moment(item.dateAndTime).format('LT')}
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
