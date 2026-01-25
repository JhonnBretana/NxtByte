import React, { useState, useEffect } from 'react';
import '../../style/games.css';
import { FaRedo, FaArrowLeft } from 'react-icons/fa';

export default function MiniGames() {
  const [currentGame, setCurrentGame] = useState(null);
  
  const [flappyGame, setFlappyGame] = useState({
    birdY: 80,
    velocity: 0,
    gameOver: false,
    score: 0,
    pipes: [{ x: 200, gapY: 50 }]
  });

  // Flappy Bird Game Logic
  useEffect(() => {
    if (currentGame !== 'flappy' || flappyGame.gameOver) return;

    const gameLoop = setInterval(() => {
      setFlappyGame(prev => {
        let newBirdY = prev.birdY + prev.velocity;
        let newVelocity = prev.velocity + 0.6; // Gravity
        let newScore = prev.score;
        let newGameOver = prev.gameOver;
        let newPipes = prev.pipes.map(pipe => ({ ...pipe, x: pipe.x - 5 }));

        // Check collision with ground/ceiling
        if (newBirdY > 140 || newBirdY < 0) {
          newGameOver = true;
        }

        // Generate new pipe
        if (newPipes[newPipes.length - 1].x < 50) {
          newPipes.push({ x: 200, gapY: Math.random() * 50 + 30 });
        }

        // Remove pipes that left screen
        newPipes = newPipes.filter(pipe => pipe.x > -50);

        // Check collision with pipes
        newPipes.forEach(pipe => {
          if (newBirdY < pipe.gapY || newBirdY > pipe.gapY + 40) {
            if (newBirdY + 8 > pipe.x && newBirdY - 8 < pipe.x + 40) {
              newGameOver = true;
            }
          }
          // Score when passing pipe
          if (pipe.x === 0) {
            newScore += 1;
          }
        });

        return {
          ...prev,
          birdY: newBirdY,
          velocity: newVelocity,
          gameOver: newGameOver,
          score: newScore,
          pipes: newPipes
        };
      });
    }, 30);

    return () => clearInterval(gameLoop);
  }, [currentGame, flappyGame.gameOver]);

  const handleFlap = () => {
    if (!flappyGame.gameOver && currentGame === 'flappy') {
      setFlappyGame(prev => ({
        ...prev,
        velocity: -6
      }));
    }
  };

  const resetFlappyGame = () => {
    setFlappyGame({
      birdY: 80,
      velocity: 0,
      gameOver: false,
      score: 0,
      pipes: [{ x: 200, gapY: 50 }]
    });
  };

  const backToMenu = () => {
    setCurrentGame(null);
    resetFlappyGame();
  };

  return (
    <div className="mini-container">
      <div className="mini-header">
        <span className="header-icon">🎮</span>
        <h2>{currentGame ? 'Flappy Bird' : 'Mini Games'}</h2>
        <span className="header-icon">🎯</span>
      </div>

      <div className="mini-content">
        {!currentGame ? (
          // Main Menu
          <div className="games-menu">
            <button
              onClick={() => setCurrentGame('flappy')}
              className="game-menu-btn"
            >
              🐦 Flappy Bird
            </button>
          </div>
        ) : currentGame === 'flappy' ? (
          // Flappy Bird Game
          <div className="flappy-container-small">
            <div className="flappy-game-small" onClick={handleFlap}>
              {/* Bird */}
              <div
                className="bird-small"
                style={{ top: `${flappyGame.birdY}px` }}
              >
                🐦
              </div>

              {/* Pipes */}
              {flappyGame.pipes.map((pipe, idx) => (
                <div key={idx} className="pipes-wrapper-small" style={{ left: `${pipe.x}px` }}>
                  {/* Top Pipe */}
                  <div
                    className="pipe-small pipe-top-small"
                    style={{ height: `${pipe.gapY}px` }}
                  ></div>
                  {/* Bottom Pipe */}
                  <div
                    className="pipe-small pipe-bottom-small"
                    style={{ top: `${pipe.gapY + 40}px` }}
                  ></div>
                </div>
              ))}

              {/* Score */}
              <div className="flappy-score-small">Score: {flappyGame.score}</div>

              {/* Game Over */}
              {flappyGame.gameOver && (
                <div className="game-over-overlay-small">
                  <div className="game-over-text-small">
                    <h3>Game Over!</h3>
                    <p>Score: {flappyGame.score}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>

      <div className="mini-footer">
        {currentGame ? (
          <div className="footer-buttons">
            <button onClick={resetFlappyGame} className="btn-reset">
              <FaRedo /> Reset
            </button>
            <button onClick={backToMenu} className="btn-back">
              <FaArrowLeft /> Back
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}