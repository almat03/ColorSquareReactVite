import React from 'react';
import colorNames from 'colornames';
import randomhex from 'random-hex';

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label> Add color name:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button role="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Color Text
      </button>
      <button role="button" onClick={() => setColorValue(randomhex.generate())}>
        Random color
      </button>
    </form>
  );
};

export default Input;
