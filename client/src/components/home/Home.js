import React from 'react';
import NavBar from './NavBar/NavBar';
import PottySelectButton from './PottySelectButton/PottySelectButton';
import SaveButton from './SaveButton/SaveButton';

import './Home.css';

const Home = ({ letOuts, state, updatePottyOption, addLetOut }) => {
  return (
    <div className="homeWrap">
      {!letOuts || letOuts.length === 0 ? (
        <div />
      ) : (
        <NavBar letOuts={letOuts} />
      )}
      <PottySelectButton
        dogName="leo"
        currentNumber={state.leoCurrent}
        updatePottyOption={() => updatePottyOption('leoCurrent')}
      />
      <PottySelectButton
        dogName="lucy"
        currentNumber={state.lucyCurrent}
        updatePottyOption={() => updatePottyOption('lucyCurrent')}
      />
      <SaveButton addLetOut={() => addLetOut()} />
    </div>
  );
};

export default Home;
