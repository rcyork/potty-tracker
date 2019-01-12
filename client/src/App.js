import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import { LetOutContext } from './components/Provider';
import Home from './components/home/Home';
import Log from './components/log/Log';

// css
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/log" component={Log} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
