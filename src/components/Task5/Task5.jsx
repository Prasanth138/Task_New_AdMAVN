import React, { useState } from 'react';
import CreateSquares from './CreateSquares';
import './Task5.css';

export default function Task5() {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(true);
  };

  return (
    <div className="main">
      <h1>Problem 5 - Box split</h1>
      <div onClick={handleClick} className="wrapper">
        {isClick && <CreateSquares onClick={handleClick} />}
      </div>
    </div>
  );
}

