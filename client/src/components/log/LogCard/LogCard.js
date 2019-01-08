import React from 'react';

import TimeLabel from './TimeLabel/TimeLabel';
import PottyNumber from './PottyNumber/PottyNumber';
import DeleteButton from './DeleteButton/DeleteButton';

import './LogCard.css';

const LogCard = () => {
  return (
    <div className="logCard">
      <TimeLabel />
      <PottyNumber dog="leo" />
      <PottyNumber dog="lucy" />
      <DeleteButton />
    </div>
  );
};

export default LogCard;
