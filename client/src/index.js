// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// import { App } from './App';

// css
import './reset.css';
import './colors.css';
import './index.css';

const App = () => {
  const [appState, setAppState] = useState([]);
  console.log('app');

  return (
    <div>
      <Settings />
    </div>
  );
};

const Settings = () => {
  // const [settingsState, setSettingsState] = useState({});
  console.log('settings');

  return <div>settings</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
