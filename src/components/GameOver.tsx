import React from "react";

import { TProps } from "./Types/types";

const GameOver = ({ winner, GameRestart, playerName }: TProps) => {
  console.log(playerName["X"]);
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner === "X" && <p>{playerName["X"]} won!</p>}
      {winner === "O" && <p>{playerName["O"]} won!</p>}

      {!winner && <p>Its a DRAW</p>}

      <button onClick={GameRestart}>Rematch!</button>
    </div>
  );
};

export default GameOver;
