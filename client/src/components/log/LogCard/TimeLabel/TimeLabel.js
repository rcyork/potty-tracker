import React from 'react';
import moment from 'moment';

import './TimeLabel.css';

const TimeLabel = ({ dateAndTime }) => {
  return (
    <h3 className="logCard__timeLabel">{moment(dateAndTime).format('LT')}</h3>
  );
};

export default TimeLabel;
