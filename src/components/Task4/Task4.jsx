import { useState, useEffect } from 'react';
import './Task4.css';

const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const HIT_SCORE = 5;
const MISS_SCORE = -2.5;

function App() {
  const [activeBox, setActiveBox] = useState(null);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameStarted && !gameOver && timeLeft > 0) {
      const intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * boxes.length);
        setActiveBox(boxes[randomIndex]);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [gameStarted, gameOver, timeLeft]);

  useEffect(() => {
    if (gameOver) {
      setScore(hits * HIT_SCORE + misses * MISS_SCORE);
    }
  }, [gameOver, hits, misses]);

  useEffect(() => {
    if (gameStarted && !gameOver && timeLeft > 0) {
      const timeoutId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timeoutId);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [gameStarted, gameOver, timeLeft]);

  const handleBoxClick = (box) => {
    if (box === activeBox) {
      setHits(hits + 1);
      setScore(score + HIT_SCORE);
    } else {
      setMisses(misses + 1);
      setScore(score + MISS_SCORE);
    }
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleRestartGame = () => {
    setGameStarted(true);
    setHits(0);
    setMisses(0);
    setScore(0);
    setGameOver(false);
    setTimeLeft(60);
  };


  return (
    <div className="Apps">
      <h1 className="heading">Problem 4 - Game (Points will be awarded if clicked on the right box)</h1>

      {!gameStarted && (
        <div className='start'>
          <p className='start-p'>Click the button below to start the game!</p>
          <button className='start-btn' onClick={handleStartGame}>Start Game</button>
        </div>
      )}

      {gameStarted && (
        <div>
          <p>Time Left: {timeLeft}</p>
          <div className="boxs-container">
            {boxes.map((box) => (
              <div
                key={box}
                className={`boxs ${activeBox === box ? 'active' : ''}`}
                onClick={() => handleBoxClick(box)}
              >
                {activeBox === box && <p>HIT</p>}
              </div>
            ))}
          </div>

          {gameOver && (
            <div className="game-over">
              <p>Total Score: {score}</p>
              <p>Game Over!</p>
              <button className='restart-btn' onClick={handleRestartGame}>Restart Game</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
