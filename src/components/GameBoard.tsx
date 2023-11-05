import React from "react";
import checkForWin from "./CheckForWin";
import GameOver from "./GameOver";

const initialGameBoard: (null | string)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

type Turns = {
  square: {
    row: number;
    col: number;
  };
  player: string;
}[];

type Props = {
  squareSelectProp: (rowInd: number, colIndx: number) => void;
  turns: Turns;
};
//-----------------------------------------------------------------------

const GameBoard = ({ squareSelectProp, turns }: Props): JSX.Element => {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  const winner = checkForWin(gameBoard);

  const hasDraw = turns.length === 9 && !winner;

  return (
    <ol className="game-board">
      {(winner || hasDraw) && <GameOver winner={winner} />}

      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => squareSelectProp(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
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
