import React from "react";

import { Props } from "./Types/types";

const GameBoard = ({
  squareSelectProp,
  turns,
  starterSymbol,
}: Props): JSX.Element => {
  return (
    <ol className="game-board">
      {turns.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => {
                    squareSelectProp(rowIndex, colIndex);
                  }}
                  disabled={playerSymbol !== null || starterSymbol === ""}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
