import React from 'react';
import { useContext } from 'react';
import { colorContext } from '../context';

function GrandChildComponent() {
  const cls = useContext(colorContext);
  console.log(cls)
  return (
    <>
      <p style={{ color: cls }}>Color:{cls} </p>
    </>
  );
}

export default GrandChildComponent;
