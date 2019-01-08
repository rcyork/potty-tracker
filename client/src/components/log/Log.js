import React from 'react';

import DateLabel from './DateLabel/DateLabel';
import LogCard from './LogCard/LogCard';

import './Log.css';

const Log = () => {
  return (
    <div className="logWrap">
      <button className="cancel">cancel</button>
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
