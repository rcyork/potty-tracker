import React from 'react';

import TimeLabel from './TimeLabel/TimeLabel';
import PottyNumber from './PottyNumber/PottyNumber';
import DeleteButton from './DeleteButton/DeleteButton';

import './LogCard.css';

const LogCard = ({
  dateAndTime,
  leo,
  lucy,
  updateLogOption,
  deleteLogEntry,
}) => {
  return (
    <div className="logCard">
      <TimeLabel dateAndTime={dateAndTime} />
      <PottyNumber
        dogName="leo"
        number={leo}
        updateLogOption={() => updateLogOption(dateAndTime, 'leo')}
      />
      <PottyNumber
        dogName="lucy"
        number={lucy}
        updateLogOption={() => updateLogOption(dateAndTime, 'lucy')}
      />
      <DeleteButton deleteLogEntry={deleteLogEntry} />
    </div>
  );
};

export default LogCard;
