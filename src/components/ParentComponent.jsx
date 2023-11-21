import React, { useState } from 'react';
import ChildComponen from './ChildComponen';
import { colorContext } from '../context';

function ParentComponent(props) {
  const [color, setColor] = useState('#000000');
  return (
    <>
      <h1>Pick a color</h1>
      <input
        type="color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
        value={color}
      />
      <colorContext.Provider color="red">
        <ChildComponen />
      </colorContext.Provider>
    </>
  );
}

export default ParentComponent;
