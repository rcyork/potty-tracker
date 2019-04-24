import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Home from './components/home/Home';
import Log from './components/log/Log';
import { Configure } from './components/configure/Configure';

// css
import './App.css';

const POTTY_OPTIONS = ['1', '2', '3', '?', '-', '1+', '2+'];

class App extends React.Component {
  state = {
    leoCurrent: '1',
    lucyCurrent: '1',
    currentCustomTime: '',
    isTimeRequired: false,
    letOuts: null,
  };

  componentDidMount() {
    fetch('/api/let-outs')
      .then(res => res.json())
      .then(letOuts => {
        this.setState({ letOuts });
      })
      .catch(error => console.log(error));
  }

  updatePottyOption = dogName => {
    this.setState(state => ({
      [dogName]: this.getNextPottyOption(state[dogName]),
    }));
  };

  deleteLogEntry = itemId => {
    fetch(`/api/let-outs/${itemId}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(
        this.setState(prevState => ({
          letOuts: prevState.letOuts.filter(entry => entry._id !== itemId),
        })),
      )
      .catch(error => console.log(error));
  };

  updateLogOption = (itemId, dogName, currentNumber) => {
    const newNumber = this.getNextPottyOption(currentNumber);
    fetch(`/api/let-outs/${itemId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        [dogName]: newNumber,
      }),
    })
      .then(res => res.json())
      .then(letOut => {
        this.setState(prevState => {
          return {
            letOuts: prevState.letOuts.map(entry => {
              if (entry._id !== itemId) {
                return entry;
              } else {
                return {
                  ...entry,
                  [dogName]: letOut[dogName],
                };
              }
            }),
          };
        });
      })
      .catch(error => console.log(error));
  };

  addLetOut = () => {
    const { currentCustomTime } = this.state;
    const body = {
      leo: this.state.leoCurrent,
      lucy: this.state.lucyCurrent,
    };

    if (currentCustomTime) {
      body.date = new Date(currentCustomTime).toISOString();
    }

    fetch('/api/let-outs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(res =>
        this.setState(prevState => {
          return {
            leoCurrent: 1,
            lucyCurrent: 1,
            currentCustomTime: '',
            isTimeRequired: false,
            letOuts: [res, ...(prevState.letOuts || [])],
          };
        }),
      )
      .catch(error => console.log(error));
  };

  getNextPottyOption = currentNumber => {
    const currentIndex = POTTY_OPTIONS.findIndex(
      entry => entry === currentNumber,
    );

    if (currentIndex === POTTY_OPTIONS.length - 1) {
      currentNumber = POTTY_OPTIONS[0];
    } else {
      currentNumber = POTTY_OPTIONS[currentIndex + 1];
    }

    return currentNumber;
  };

  insertDateTimeLocalInput = () => {
    this.setState({ isTimeRequired: true });
  };

  handleCustomTime = customTime => {
    this.setState({
      currentCustomTime: customTime,
    });
  };

  cancelCustomTime = () => {
    this.setState({ isTimeRequired: false, currentCustomTime: '' });
  };

  render() {
    const sortedLetOuts = (this.state.letOuts || []).sort((a, b) =>
      a.date > b.date ? -1 : 1,
    );

    return (
      <Configure />
      // <BrowserRouter>
      //   <div className="app">
      //     <Switch>
      //       <Route
      //         exact
      //         path="/"
      //         render={() => (
      //           <Home
      //             letOuts={this.state.letOuts}
      //             state={this.state}
      //             updatePottyOption={this.updatePottyOption}
      //             addLetOut={this.addLetOut}
      //             insertDateTimeLocalInput={this.insertDateTimeLocalInput}
      //             isTimeRequired={this.state.isTimeRequired}
      //             handleCustomTime={this.handleCustomTime}
      //             cancelCustomTime={this.cancelCustomTime}
      //           />
      //         )}
      //       />
      //       <Route
      //         path="/log"
      //         render={() => (
      //           <Log
      //             letOuts={sortedLetOuts}
      //             updateLogOption={this.updateLogOption}
      //             deleteLogEntry={this.deleteLogEntry}
      //           />
      //         )}
      //       />
      //     </Switch>
      //   </div>
      // </BrowserRouter>
    );
  }
}

export default App;
