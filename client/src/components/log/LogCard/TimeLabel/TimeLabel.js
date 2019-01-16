import React from 'react';
import moment from 'moment';

import './TimeLabel.css';

const TimeLabel = ({ date }) => {
  return <h3 className="logCard__timeLabel">{moment(date).format('LT')}</h3>;
};

export default TimeLabel;
