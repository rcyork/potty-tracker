import React from 'react';
import NavBar from './NavBar/NavBar';
import PottySelectButton from './PottySelectButton/PottySelectButton';
import SaveButton from './SaveButton/SaveButton';

import { LetOutContext } from '../Provider';

import './Home.css';

const Home = () => {
  return (
    <LetOutContext.Consumer>
      {({
        updatePottyOption,
        leoCurrent,
        lucyCurrent,
        postLetOut,
        getNextPottyOption,
        addLetOut,
        letOuts,
      }) => (
        <div className="homeWrap">
          <NavBar letOuts={letOuts} />
          <PottySelectButton
            dogName="leo"
            currentNumber={leoCurrent}
            updatePottyOption={() => updatePottyOption('leoCurrent')}
            postLetOut={postLetOut}
          />
          <PottySelectButton
            dogName="lucy"
            currentNumber={lucyCurrent}
            updatePottyOption={() => updatePottyOption('lucyCurrent')}
            postLetOut={postLetOut}
            getNextPottyOption={getNextPottyOption}
          />
          <SaveButton addLetOut={() => addLetOut()} />
        </div>
      )}
    </LetOutContext.Consumer>
  );
};

export default Home;
