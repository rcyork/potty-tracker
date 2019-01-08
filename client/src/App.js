import React, { Component } from 'react';

// components
import Home from './components/home/Home';

// css
import './App.css';

class App extends Component {
  state = { data: null };

  // componentDidMount() {
  //   fetch('/api/let-outs')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         data,
  //       });
  //     });
  // }

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <Home />
      </div>
    );
  }
}

export default App;
