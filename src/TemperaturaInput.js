import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const TemperaturaInput = ({ scale, eventChange, temperatura }) => {
  return (
    <div>
      <fieldset>
        <legend>Temperatura {scaleNames[scale]}</legend>
        <input value={temperatura} onChange={eventChange} />
      </fieldset>
    </div>
  );
};

export default TemperaturaInput;
