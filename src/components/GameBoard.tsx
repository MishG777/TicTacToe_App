import React, { useState } from "react";

const initialGameBoard: (null | string)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const squareHandler = (rowInd: number, colInd: number) => {
    setGameBoard((prevBoard) => {
      const updatedBoard = [
        ...prevBoard.map((innderArray) => [...innderArray]),
      ];
      console.log(updatedBoard);
      updatedBoard[rowInd][colInd] = "O";
      return updatedBoard;
    });
  };

  return (
    <ol className="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => squareHandler(rowIndex, colIndex)}>
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
