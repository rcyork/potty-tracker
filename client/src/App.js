import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// components
import { Home } from './components/Home/Home';
import { Log } from './components/Log/Log';
import { Settings } from './components/Settings/Settings';

// css
import './App.css';

const POTTY_OPTIONS = ['1', '2', '3', '?', '-', '1+', '2+'];

class App extends React.Component {
  state = {
    newDog: { name: '', color: 'red' },
    dogs: [],
    logs: [],
  };

  componentDidMount() {
    const {
      match: {
        params: { roomKey },
      },
    } = this.props;

    fetch(`/api/${roomKey}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ dogs: res.dogs, logs: res.logs });
      })
      .catch(error => console.log(error));
  }

  updatePottyOption = (name, number) => {
    this.setState(prevState => {
      return {
        dogs: prevState.dogs.map(dog => {
          if (dog.name !== name) {
            return { ...dog };
          }
          return { ...dog, currentNumber: this.getNextPottyOption(number) };
        }),
      };
    });
  };

  addLetOut = (pottyNumbers, roomKey) => {
    fetch(`/api/${roomKey}/logs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date: new Date().toISOString(),
        pottyNumbers: pottyNumbers,
      }),
    })
      .then(res => res.json())
      .then(res => {
        this.setState(prevState => ({
          dogs: prevState.dogs.map(dog => {
            return { ...dog, currentNumber: '1' };
          }),
          logs: [res, ...prevState.logs],
        }));
      });
  };

  deleteLogEntry = (roomKey, date) => {
    fetch(`/api/${roomKey}/logs/${date}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(
        this.setState(prevState => ({
          logs: prevState.logs.filter(entry => entry.date !== date),
        })),
      )
      .catch(error => console.log(error));
  };

  updateLogOption = (date, dogName, currentNumber, roomKey, currentLog) => {
    const newNumber = this.getNextPottyOption(currentNumber);
    fetch(`/api/${roomKey}/logs/${date}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pottyNumbers: currentLog.pottyNumbers.map(item => {
          if (item.name !== dogName) {
            return item;
          }
          return {
            ...item,
            pottyNumber: newNumber,
          };
        }),
      }),
    })
      .then(res => res.json())
      .then(log => {
        this.setState(prevState => {
          return {
            logs: prevState.logs.map(entry => {
              if (entry.date !== log.date) {
                return entry;
              } else {
                return {
                  ...entry,
                  pottyNumbers: log.pottyNumbers,
                };
              }
            }),
          };
        });
      })
      .catch(error => console.log(error));
  };

  // addLetOut = () => {
  //   const { currentCustomTime } = this.state;
  //   const body = {
  //     leo: this.state.leoCurrent,
  //     lucy: this.state.lucyCurrent,
  //   };

  //   if (currentCustomTime) {
  //     body.date = new Date(currentCustomTime).toISOString();
  //   }

  //   fetch('/api/let-outs', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(body),
  //   })
  //     .then(res => res.json())
  //     .then(res =>
  //       this.setState(prevState => {
  //         return {
  //           leoCurrent: 1,
  //           lucyCurrent: 1,
  //           currentCustomTime: '',
  //           isTimeRequired: false,
  //           letOuts: [res, ...(prevState.letOuts || [])],
  //         };
  //       }),
  //     )
  //     .catch(error => console.log(error));
  // };

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

  onColorChanged = newColor => {
    this.setState(prevState => {
      return { newDog: { ...prevState.newDog, color: newColor } };
    });
  };

  onDogNameChange = text => {
    this.setState(prevState => {
      return { newDog: { ...prevState.newDog, name: text } };
    });
  };

  onDogAdded = (dogToAdd, roomKey) => {
    fetch(`/api/${roomKey}/dogs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dogToAdd),
    })
      .then(res => res.json())
      .then(res => {
        this.setState(prevState => {
          return {
            dogs: [...prevState.dogs, { ...res, currentNumber: '1' }],
            newDog: { name: '', color: 'red' },
          };
        });
      });
  };

  onDogDeleted = (dogToDelete, roomKey) => {
    fetch(`/api/${roomKey}/dogs/${dogToDelete}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ dogs: res });
      })
      .catch(error => console.log(error));
  };

  render() {
    const {
      match: {
        params: { roomKey },
      },
    } = this.props;

    return (
      <div className="app">
        <Route
          exact
          path="/:roomKey/settings"
          render={() => (
            <Settings
              newDog={this.state.newDog}
              dogs={this.state.dogs}
              onDogNameChange={this.onDogNameChange}
              onColorChanged={this.onColorChanged}
              onDogAdded={this.onDogAdded}
              onDogDeleted={this.onDogDeleted}
              roomKey={roomKey}
            />
          )}
        />
        <Route
          exact
          path="/:roomKey"
          render={() => {
            if (!this.state.dogs || this.state.dogs.length === 0) {
              return <Redirect to={`/${roomKey}/settings`} />;
            }

            return (
              <Home
                mostRecentLetOut={this.state.logs[0]}
                dogs={this.state.dogs}
                updatePottyOption={this.updatePottyOption}
                addLetOut={this.addLetOut}
                roomKey={roomKey}
              />
            );
          }}
        />
        <Route
          path="/:roomKey/log"
          render={() => (
            <Log
              logs={this.state.logs}
              updateLogOption={this.updateLogOption}
              dogs={this.state.dogs}
              deleteLogEntry={this.deleteLogEntry}
              roomKey={roomKey}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
