import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { data: null };

  componentDidMount() {
    fetch('/api/let-outs')
      .then(res => res.json())
      .then(data => {
        this.setState({
          data,
        });
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {JSON.stringify(data)}
        </header>
      </div>
    );
  }
}

export default App;
