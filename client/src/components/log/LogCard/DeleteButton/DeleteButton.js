import React from 'react';

import './DeleteButton.css';

const DeleteButton = ({ deleteLogEntry }) => {
  return (
    <button className="logCard__deleteButton" onClick={deleteLogEntry}>
      <i className="fas fa-times fa-3x" />
    </button>
  );
};

export default DeleteButton;
