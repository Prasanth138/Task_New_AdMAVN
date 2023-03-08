import React, { useState } from 'react';
import CreateSquares from './CreateSquares';


function Square({ val, onClick }) {
  const [click, setClick] = useState(false);

  const handleDiv = () => {
    setClick(true);
    onClick();
  };

  return (
    <div className={val} onClick={handleDiv}>
      {click && <CreateSquares onClick={onClick} />}
    </div>
  );
}

export default Square;

