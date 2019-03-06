import React from 'react';

import TimeLabel from './TimeLabel/TimeLabel';
import PottyNumber from './PottyNumber/PottyNumber';
import DeleteButton from './DeleteButton/DeleteButton';

import './LogCard.css';

const LogCard = ({
  date,
  leoNumber,
  lucyNumber,
  updateLogOption,
  deleteLogEntry,
  itemId,
}) => {
  return (
    <div className="logCard">
      <TimeLabel date={date} />
      <PottyNumber
        dogName="leo"
        number={leoNumber}
        updateLogOption={() => updateLogOption(itemId, 'leo', leoNumber)}
      />
      <PottyNumber
        dogName="lucy"
        number={lucyNumber}
        updateLogOption={() => updateLogOption(itemId, 'lucy', lucyNumber)}
      />
      <DeleteButton deleteLogEntry={() => deleteLogEntry(itemId)} />
    </div>
  );
};

export default LogCard;
