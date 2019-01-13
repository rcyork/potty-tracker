import React from 'react';

export const LetOutContext = React.createContext();

const POTTY_OPTIONS = ['-', '1', '2', '3', '?'];

export class Provider extends React.Component {
  state = {
    leoCurrent: '1',
    lucyCurrent: '2',
    letOuts: [
      {
        leo: '2',
        lucy: '2',
        dateAndTime: new Date(),
      },
      {
        leo: '3',
        lucy: '3',
        dateAndTime: new Date('1995-12-17T03:22:00'),
      },
      {
        leo: '2',
        lucy: '2',
        dateAndTime: new Date('1995-12-17T03:23:00'),
      },
      {
        leo: '3',
        lucy: '3',
        dateAndTime: new Date(),
      },
    ],
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

  postLetOut() {
    fetch('/api/let-outs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        leo: this.state.leoCurrent,
        lucy: this.state.lucyCurrent,
      }),
    });
  }

  render() {
    return (
      <LetOutContext.Provider
        value={{
          state: this.state,
          leoCurrent: this.state.leoCurrent,
          lucyCurrent: this.state.lucyCurrent,
          letOuts: this.state.letOuts,
          getNextPottyOption: this.getNextPottyOption,
          updatePottyOption: this.updatePottyOption,
        }}
      >
        {this.props.children}
      </LetOutContext.Provider>
    );
  }
}
