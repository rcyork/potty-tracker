import React from 'react';

import { LogCard } from './LogCard/LogCard';

import './Log.css';

export const Log = ({ log }) => (
  <div className="log">
    <button className="goHomeButton">
      <i className="fas fa-home" />
      home
    </button>
    {log.map(letOut => {
      return <LogCard letOut={letOut} />;
    })}
  </div>
);
