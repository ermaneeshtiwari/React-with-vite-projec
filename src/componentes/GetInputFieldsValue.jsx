import React, { useState } from 'react';
function GetInputFieldsValue() {
  const [inputValue, setInputValue] = useState('');
  const [printValue, setPrintValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setPrintValue(false);
  };

  return (
    <div>
         { printValue ? <p>{printValue}</p> : <p>Digite algo no campo de entrada para ver o valor aqui.</p>}
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Type something..." />
        <p>Value: {inputValue}</p>
        <button onClick={() => setPrintValue(inputValue)}>Show Input Value</button>
    </div>
  );
}   
export default GetInputFieldsValue;