import React from 'react';

import './ColorOption.css';

export const ColorOption = ({ color, currentColor, onColorChanged }) => {
  return (
    <li key={color}>
      <input
        type="radio"
        name="color"
        id={color}
        onChange={() => onColorChanged(color)}
      />
      <label
        htmlFor={color}
        className={`colorLabel ${color} ${
          color === currentColor ? 'highlighted' : ''
        }`}
      />
    </li>
  );
};
