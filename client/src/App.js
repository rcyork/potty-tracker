import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { CreateRoom } from './components/CreateRoom/CreateRoom';
import { Home } from './components/Home/Home';
import { Settings } from './components/Settings/Settings';
import { Log } from './components/Log/Log';

import './App.css';

const POTTY_OPTIONS = ['1', '3', '?', '-', '2'];

export const App = () => {
  const [dogs, setDogs] = useState([]);
  const [logs, setLogs] = useState([]);

  const fetchRoom = React.useCallback(roomKey => {
    fetch(`/api/${roomKey}`)
      .then(res => res.json())
      .then(res => {
        setLogs(res.logs);
        setDogs(
          res.dogs.map(dog => {
            return { ...dog, currentNumber: '1' };
          }),
        );
      })
      .catch(error => console.log(error));
  }, []);

  const updatePottyOption = (name, number) => {
    setDogs(
      dogs.map(dog => {
        if (dog.name !== name) {
          return { ...dog };
        }
        return { ...dog, currentNumber: getNextPottyOption(number) };
      }),
    );
  };

  const addLetOut = (pottyNumbers, roomKey) => {
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
        setDogs(
          dogs.map(dog => {
            return { ...dog, currentNumber: '1' };
          }),
        );

        setLogs([res, ...logs]);
      });
  };

  const deleteLogEntry = (roomKey, date) => {
    fetch(`/api/${roomKey}/logs/${date}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(setLogs(logs.filter(entry => entry.date !== date)))
      .catch(error => console.log(error));
  };

  const updateLogOption = (
    date,
    dogName,
    currentNumber,
    roomKey,
    currentLog,
  ) => {
    const newNumber = getNextPottyOption(currentNumber);
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
        setLogs(
          logs.map(entry => {
            if (entry.date !== log.date) {
              return entry;
            }
            return { ...entry, pottyNumbers: log.pottyNumbers };
          }),
        );
      })
      .catch(error => console.log(error));
  };

  const getNextPottyOption = currentNumber => {
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

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <CreateRoom />} />
          <Route
            path="/:roomKey"
            render={({
              match: {
                params: { roomKey },
              },
            }) => {
              return (
                <Switch>
                  <Route
                    exact
                    path="/:roomKey/settings"
                    render={() => (
                      <Settings
                        fetchRoom={fetchRoom}
                        dogs={dogs}
                        roomKey={roomKey}
                        setDogs={setDogs}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/:roomKey"
                    render={() => (
                      <Home
                        fetchRoom={fetchRoom}
                        mostRecentLetOut={logs[0]}
                        dogs={dogs}
                        updatePottyOption={updatePottyOption}
                        addLetOut={addLetOut}
                        roomKey={roomKey}
                      />
                    )}
                  />
                  <Route
                    path="/:roomKey/log"
                    render={() => (
                      <Log
                        logs={logs}
                        updateLogOption={updateLogOption}
                        dogs={dogs}
                        deleteLogEntry={deleteLogEntry}
                        fetchRoom={fetchRoom}
                        roomKey={roomKey}
                      />
                    )}
                  />
                </Switch>
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
