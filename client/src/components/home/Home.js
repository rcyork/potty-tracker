import React from 'react';
import NavBar from './NavBar/NavBar';
import PottySelectButton from './PottySelectButton/PottySelectButton';
import SaveButton from './SaveButton/SaveButton';
import CustomTimeInput from './CustomTimeInput';

import './Home.css';

const Home = ({
  letOuts,
  state,
  updatePottyOption,
  addLetOut,
  insertDateTimeLocalInput,
  isTimeRequired,
  handleCustomTime,
  cancelCustomTime,
}) => {
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
      <div className="bottomButtonsWrap">
        <button className="editTime" onClick={insertDateTimeLocalInput}>
          {isTimeRequired ? (
            <CustomTimeInput
              handleCustomTime={handleCustomTime}
              value={state.currentCustomTime}
            />
          ) : (
            <i className="far fa-clock fa-5x" />
          )}
        </button>
        {isTimeRequired ? (
          <button className="cancelEditTime" onClick={cancelCustomTime}>
            <i className="fas fa-times fa-3x" />
          </button>
        ) : (
          <div />
        )}
        <SaveButton addLetOut={() => addLetOut()} />
      </div>
    </div>
  );
};

export default Home;
