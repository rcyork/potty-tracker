import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from './components/Provider';

// css
import './reset.css';
import './colors.css';
import './index.css';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);
