import React, { useState } from 'react';
import TemperaturaInput from './TemperaturaInput';
import BoilingVerdict from './BoilingVerdict';

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);

  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const Calculator = () => {
  const [temperatura, setTemperatura] = useState('');
  const [scale, setScale] = useState('');

  const handleCelsiusChange = e => {
    setScale('c');
    setTemperatura(e.target.value);
  };

  const handleFahrenheitChange = e => {
    setScale('f');
    setTemperatura(e.target.value);
  };

  const celsius =
    scale === 'f' ? tryConvert(temperatura, toCelsius) : temperatura;
  const fahrenheit =
    scale === 'c' ? tryConvert(temperatura, toFahrenheit) : temperatura;

  return (
    <div>
      <TemperaturaInput
        temperatura={celsius}
        scale="c"
        eventChange={handleCelsiusChange}
      />
      <TemperaturaInput
        temperatura={fahrenheit}
        scale="f"
        eventChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
};

export default Calculator;
