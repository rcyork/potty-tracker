import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Snapshot } from './Snapshot/Snapshot';
import { SelectPottyNumberButton } from './SeletcPottyNumberButton/SelectPottyNumberButton';

import './Home.css';

export const Home = ({
  mostRecentLetOut,
  dogs,
  updatePottyOption,
  addLetOut,
  roomKey,
  fetchRoom,
}) => {
  useEffect(
    () => {
      fetchRoom(roomKey);
    },
    [fetchRoom, roomKey],
  );
  return (
    <div className="home">
      <div className="navAndInfoBar">
        <Link to={`/${roomKey}/settings`} className="settingsIcon">
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
        <Link to={`/${roomKey}/log`} className="logLink">
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
              roomKey,
            )
          }
        >
          save
        </button>
      </div>
    </div>
  );
};
