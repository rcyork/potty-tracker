import React from 'react';

import './SaveButton.css';

const SaveButton = ({ addLetOut }) => {
  return (
    <button className="save" onClick={addLetOut}>
      <i className="fas fa-check" />
    </button>
  );
};

export default SaveButton;
