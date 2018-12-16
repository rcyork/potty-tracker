import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { message: null };

  componentDidMount() {
    fetch('/message')
      .then(res => res.json())
      .then(({ message }) => {
        this.setState({
          message,
        });
      });
  }

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {message ? message : 'Wassup'}
        </header>
      </div>
    );
  }
}

export default App;
