import React from 'react';
import Square from './Square';

const CreateSquares = () => {
  const squares = ["Square1", "Square2", "Square3", "Square4"];

  return (
    <div className="squareWrapper">
      {squares.map((val) => (
        <Square val={val} key={val} />
      ))}
    </div>
  )
}

export default CreateSquares;
