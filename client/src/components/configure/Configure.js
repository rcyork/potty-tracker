import React from 'react';

import { ColorOption } from './ColorOption/ColorOption';
import { DogsList } from './DogsList/DogsList';
import './Configure.css';

const COLOR_OPTIONS = ['red', 'blue', 'orange', 'green', 'purple', 'pink'];

export class Configure extends React.Component {
  state = {
    newDog: { color: 'red' },
    dogs: [{ name: 'lucy', color: 'red' }, { name: 'leo', color: 'blue' }],
  };

  onColorChanged = newColor => {
    this.setState(prevState => {
      return { newDog: { ...prevState.newDog, color: newColor } };
    });
  };
  render() {
    return (
      <div className="configureContainer">
        <label htmlFor="dogNameInput" className="dogNameInputLabel">
          dog name
        </label>
        <input type="text" id="dogNameInput" />
        <label className="colorSectionLabel">color</label>
        <ul className="colorSelection">
          {COLOR_OPTIONS.map(color => {
            return (
              <ColorOption
                color={color}
                currentColor={this.state.newDog.color}
                onColorChanged={this.onColorChanged}
              />
            );
          })}
        </ul>
        <button className="addDogButton">+ add dog</button>
        <DogsList dogs={this.state.dogs} />
        <button className="doneButton">done</button>
      </div>
    );
  }
}
