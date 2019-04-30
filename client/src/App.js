import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

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
    dogs: [
      { name: 'leo', color: 'blue', currentNumber: '1' },
      { name: 'lucy', color: 'pink', currentNumber: '1' },
      { name: 'leo', color: 'blue', currentNumber: '1' },
      { name: 'lucy', color: 'pink', currentNumber: '1' },
      { name: 'leo', color: 'blue', currentNumber: '1' },
    ],
    log: [
      {
        date: new Date(),
        pottyNumbers: [
          { name: 'leo', pottyNumber: '1' },
          { name: 'lucy', pottyNumber: '3' },
          { name: 'leo', pottyNumber: '1' },
          { name: 'lucy', pottyNumber: '3' },
          { name: 'leo', pottyNumber: '1' },
        ],
      },
      {
        date: 1556111166721,
        pottyNumbers: [
          { name: 'leo', pottyNumber: '1' },
          { name: 'lucy', pottyNumber: '3' },
          { name: 'leo', pottyNumber: '1' },
          { name: 'lucy', pottyNumber: '3' },
          { name: 'leo', pottyNumber: '1' },
        ],
      },
    ],
  };

  // componentDidMount() {
  //   fetch('/api/let-outs')
  //     .then(res => res.json())
  //     .then(letOuts => {
  //       this.setState({ letOuts });
  //     })
  //     .catch(error => console.log(error));
  // }

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

  addLetOut = pottyNumbers => {
    this.setState(prevState => {
      return { log: [{ date: new Date(), pottyNumbers }, ...prevState.log] };
    });
  };

  // deleteLogEntry = itemId => {
  //   fetch(`/api/let-outs/${itemId}`, {
  //     method: 'DELETE',
  //   })
  //     .then(res => res.json())
  //     .then(
  //       this.setState(prevState => ({
  //         letOuts: prevState.letOuts.filter(entry => entry._id !== itemId),
  //       })),
  //     )
  //     .catch(error => console.log(error));
  // };

  // updateLogOption = (itemId, dogName, currentNumber) => {
  //   const newNumber = this.getNextPottyOption(currentNumber);
  //   fetch(`/api/let-outs/${itemId}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       [dogName]: newNumber,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(letOut => {
  //       this.setState(prevState => {
  //         return {
  //           letOuts: prevState.letOuts.map(entry => {
  //             if (entry._id !== itemId) {
  //               return entry;
  //             } else {
  //               return {
  //                 ...entry,
  //                 [dogName]: letOut[dogName],
  //               };
  //             }
  //           }),
  //         };
  //       });
  //     })
  //     .catch(error => console.log(error));
  // };

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

  onDogAdded = dogToAdd => {
    this.setState(prevState => {
      return {
        dogs: [...prevState.dogs, dogToAdd],
        newDog: { name: '', color: 'red' },
      };
    });
  };

  onDogDeleted = dogToDelete => {
    this.setState(prevState => {
      return { dogs: prevState.dogs.filter(dog => dog.name !== dogToDelete) };
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/settings"
              render={() => (
                <Settings
                  newDog={this.state.newDog}
                  dogs={this.state.dogs}
                  onDogNameChange={this.onDogNameChange}
                  onColorChanged={this.onColorChanged}
                  onDogAdded={this.onDogAdded}
                  onDogDeleted={this.onDogDeleted}
                />
              )}
            />
            <Route
              exact
              path="/"
              render={() => {
                if (!this.state.dogs || this.state.dogs.length === 0) {
                  return <Redirect to="/settings" />;
                }

                return (
                  <Home
                    mostRecentLetOut={this.state.log[0]}
                    dogs={this.state.dogs}
                    updatePottyOption={this.updatePottyOption}
                    addLetOut={this.addLetOut}
                  />
                );
              }}
            />
            <Route
              path="/log"
              render={() => <Log log={this.state.log} dogs={this.state.dogs} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
