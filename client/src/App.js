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
    <LetOutContext.Consumer>
      {({ state }) => (
        <BrowserRouter>
          <div className="app">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/log" render={() => <Log state={state} />} />
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </LetOutContext.Consumer>
  );
};

export default App;
