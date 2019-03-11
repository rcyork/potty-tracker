import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

import DateLabel from './DateLabel/DateLabel';
import LogCard from './LogCard/LogCard';

import './Log.css';

const Log = ({ letOuts, updateLogOption, deleteLogEntry }) => {
  if (!letOuts) return 'no let outs';

  const logSortedByDays = letOuts.reduce((acc, item) => {
    const dateLabel = moment(item.date).format('MMMM Do, YYYY');
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
            <React.Fragment key={day}>
              <DateLabel day={day} />
              <div className="logCardsGridGap">
                {items.map(item => {
                  return (
                    <LogCard
                      key={item._id}
                      itemId={item._id}
                      date={item.date}
                      leoNumber={item.leo}
                      lucyNumber={item.lucy}
                      updateLogOption={updateLogOption}
                      deleteLogEntry={deleteLogEntry}
                    />
                  );
                })}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Log;
