import React from 'react';

import TimeLabel from './TimeLabel/TimeLabel';
import PottyNumber from './PottyNumber/PottyNumber';
import DeleteButton from './DeleteButton/DeleteButton';

import './LogCard.css';

const LogCard = ({ time }) => {
  return (
    <div className="logCard">
      <TimeLabel time={time} />
      <PottyNumber dogName="leo" />
      <PottyNumber dogName="lucy" />
      <DeleteButton />
    </div>
  );
};

export default LogCard;
