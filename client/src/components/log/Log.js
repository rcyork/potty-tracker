import React from 'react';
import { NavLink } from 'react-router-dom';

import DateLabel from './DateLabel/DateLabel';
import LogCard from './LogCard/LogCard';

import './Log.css';

const Log = () => {
  return (
    <div className="logWrap">
      <NavLink className="cancel" exact to="/">
        cancel
      </NavLink>
      <div className="scrollingLog">
        <DateLabel />
        <div className="logCardsGridGap">
          <LogCard />
          <LogCard />
          <LogCard />
          <LogCard />
          <LogCard />
          <LogCard />
          <LogCard />
          <LogCard />
          <LogCard />
          <LogCard />
          <LogCard />
          <LogCard />
        </div>
      </div>
    </div>
  );
};

export default Log;
