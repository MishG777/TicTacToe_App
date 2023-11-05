import React from "react";

const GameOver = ({ winner }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>Its a DRAW</p>}

      <button onClick={() => window.location.reload()}>Rematch!</button>
    </div>
  );
};

export default GameOver;
