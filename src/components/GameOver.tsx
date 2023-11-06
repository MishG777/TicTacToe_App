import React from "react";

type TProps = {
  winner: string | null;
  GameRestart: () => void;
};

const GameOver = ({ winner, GameRestart }: TProps) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>Its a DRAW</p>}

      <button onClick={GameRestart}>Rematch!</button>
    </div>
  );
};

export default GameOver;
