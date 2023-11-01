import React, { useState } from "react";

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

const GameBoard = ({ squareSelectProp, turns }: Props): JSX.Element => {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  //const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //const squareHandler = (rowInd: number, colInd: number) => {
  //  setGameBoard((prevBoard) => {
  //    const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
  //    console.log(updatedBoard);
  //    updatedBoard[rowInd][colInd] = clickedSymbol;
  //    return updatedBoard;
  //  });

  //  squareSelectProp();
  //};

  return (
    <ol className="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => squareSelectProp(rowIndex, colIndex)}>
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
