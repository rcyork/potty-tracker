import React from 'react';

import './SaveButton.css';

const SaveButton = ({ addLetOut }) => {
  return (
    <button className="save" onClick={addLetOut}>
      save
    </button>
  );
};

export default SaveButton;
