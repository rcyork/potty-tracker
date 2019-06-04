import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';

const Room = () => {
  return (
    <BrowserRouter>
      <Route path="/:roomKey" component={App} />
    </BrowserRouter>
  );
};

export default Room;
