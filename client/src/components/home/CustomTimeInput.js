import React from 'react';

const customTimeInput = ({ handleCustomTime, value }) => {
  return (
    <input
      className="customTime"
      type="datetime-local"
      onChange={event => {
        handleCustomTime(event.target.value);
      }}
      value={value}
      autoFocus
    />
  );
};

export default customTimeInput;
