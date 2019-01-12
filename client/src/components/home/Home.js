import React from 'react';
import NavBar from './NavBar/NavBar';
import PottySelectButton from './PottySelectButton/PottySelectButton';
import SaveButton from './SaveButton/SaveButton';

import { LetOutContext } from '../Provider';

import './Home.css';

const Home = () => {
  return (
    <LetOutContext.Consumer>
      {({ updatePottyOption, leoCurrent, lucyCurrent }) => (
        <div className="homeWrap">
          <NavBar />
          <PottySelectButton
            dogName="leo"
            currentNumber={leoCurrent}
            updatePottyOption={() => updatePottyOption('leoCurrent')}
          />
          <PottySelectButton
            dogName="lucy"
            currentNumber={lucyCurrent}
            updatePottyOption={() => updatePottyOption('lucyCurrent')}
          />
          <SaveButton />
        </div>
      )}
    </LetOutContext.Consumer>
  );
};

export default Home;
