import React from 'react';
import { Link } from 'react-router-dom';
import { Snapshot } from './Snapshot/Snapshot';
import { SelectPottyNumberButton } from './SeletcPottyNumberButton/SelectPottyNumberButton';

import './Home.css';

export const Home = ({ mostRecentLetOut, dogs }) => (
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
          return <SelectPottyNumberButton dog={dog} />;
        })}
      </div>
    </div>
    <div className="bottomButtonsWrap">
      <Link to="/log" className="logLink">
        <i className="fas fa-clipboard-list fa-4x" />
      </Link>
      <button className="save">save</button>
    </div>
  </div>
);
