import React from 'react';
import NavBar from './NavBar/NavBar';
import PottySelectButton from './PottySelectButton/PottySelectButton';
import SaveButton from './SaveButton/SaveButton';

import './Home.css';

const Home = () => {
  return (
    <div className="homeWrap">
      <NavBar />
      <PottySelectButton dog="leo" />
      <PottySelectButton dog="lucy" />
      <SaveButton />
    </div>
  );
};

export default Home;
