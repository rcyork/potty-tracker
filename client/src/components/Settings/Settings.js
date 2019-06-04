import React from 'react';

import { Link } from 'react-router-dom';

import { ColorOption } from './ColorOption/ColorOption';
import { DogsList } from './DogsList/DogsList';
import './Settings.css';

const COLOR_OPTIONS = [
  'red',
  'blue',
  'orange',
  'green',
  'purple',
  'pink',
  'yellow',
  'black',
  'grey',
];

export const Settings = ({
  newDog,
  dogs,
  onDogNameChange,
  onColorChanged,
  onDogAdded,
  onDogDeleted,
}) => {
  const duplicateDogNames = dogs.find(dog => dog.name === newDog.name);
  const tooManyDogs = dogs.length >= 9;
  const emptyNameInputField = !newDog.name || newDog.name === '';
  return (
    <div className="configureContainer">
      <div className="dogNameInputWrap">
        <label htmlFor="dogNameInput" className="dogNameInputLabel">
          dog name
        </label>
        <input
          type="text"
          id="dogNameInput"
          value={newDog.name}
          onChange={event => onDogNameChange(event.target.value)}
          className={`${
            duplicateDogNames || tooManyDogs || emptyNameInputField
              ? 'inputWarning'
              : null
          }`}
        />
        {duplicateDogNames ? (
          <p className="inputWarningText">Your dogs must have unique names</p>
        ) : tooManyDogs ? (
          <p className="inputWarningText">
            You have the maxium amount of dogs allowed
          </p>
        ) : emptyNameInputField ? (
          <p className="inputWarningText">Your dog needs a name!</p>
        ) : null}
      </div>
      <div className="colorSectionWrap">
        <label className="colorSectionLabel">color</label>
        <ul className="colorSelection">
          {COLOR_OPTIONS.map(color => {
            return (
              <ColorOption
                key={color}
                color={color}
                currentColor={newDog.color}
                onColorChanged={onColorChanged}
              />
            );
          })}
        </ul>
        <button
          disabled={duplicateDogNames || tooManyDogs || emptyNameInputField}
          className={`addDogButton`}
          onClick={() => onDogAdded({ name: newDog.name, color: newDog.color })}
        >
          <i className="fas fa-plus" /> add dog
        </button>
      </div>
      <div className="dogsListWrap">
        <div className="scrollingList">
          <DogsList dogs={dogs} onDogDeleted={onDogDeleted} />
        </div>
        <Link className="doneButton" to="/">
          <i className="fas fa-check" /> done
        </Link>
      </div>
    </div>
  );
};
