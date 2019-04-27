import React from 'react';

import moment from 'moment';

import './LogCard.css';

export const LogCard = ({ letOut }) => {
  return <div>{moment(letOut.date).format('LT')}</div>;
};
