import React from 'react';
import { Link } from 'react-router-dom';
import { Snapshot } from './Snapshot/Snapshot';
import { SelectPottyNumberButton } from './SeletcPottyNumberButton/SelectPottyNumberButton';

import './Home.css';

export const Home = ({
  mostRecentLetOut,
  dogs,
  updatePottyOption,
  addLetOut,
}) => (
  <div className="home">
    <div className="navAndInfoBar">
      <Link to="/settings">
        <i className="fas fa-cog fa-2x" />
      </Link>
      <Snapshot mostRecentLetOut={mostRecentLetOut} dogs={dogs} />
    </div>
    <div className="selectPottyNumbersWrap">
      <div
        className={`selectPottyNumbers ${
          dogs.length >= 5 ? 'moreThanFive' : null
        } ${dogs.length <= 2 ? 'twoOrLess' : null}`}
      >
        {dogs.map(dog => {
          return (
            <SelectPottyNumberButton
              key={dog.name}
              dog={dog}
              updatePottyOption={updatePottyOption}
            />
          );
        })}
      </div>
    </div>
    <div className="bottomButtonsWrap">
      <Link to="/log" className="logLink">
        <i className="fas fa-clipboard-list fa-4x" />
      </Link>
      <button
        className="save"
        onClick={() =>
          addLetOut(
            dogs.map(dog => ({
              name: dog.name,
              pottyNumber: dog.currentNumber,
            })),
          )
        }
      >
        save
      </button>
    </div>
  </div>
);
