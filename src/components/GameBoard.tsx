import React from "react";

type Props = {
  squareSelectProp: (rowInd: number, colIndx: number) => void;
  turns: (string | null)[][];
  starterSymbol: string;
};
//-----------------------------------------------------------------------

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
