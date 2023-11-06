import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

import checkForWin from "./components/CheckForWin";
import GameOver from "./components/GameOver";

type Turns = {
  square: {
    row: number;
    col: number;
  };
  player: string;
}[];

const initialGameBoard: (null | string)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameLogger, setGameLogger] = useState<
    { square: { row: number; col: number }; player: string }[]
  >([]);

  const [starterSymbol, setStarterSymbol] = useState<string>("");

  const ActivePlayer = (player: Turns) => {
    let currPlayer = starterSymbol;

    if (player.length > 0 && player[0].player === "X") {
      currPlayer = "O";
    } else if (player.length > 0 && player[0].player === "O") {
      currPlayer = "X";
    }
    return currPlayer;
  };

  const activePlayer = ActivePlayer(gameLogger);

  const SelectSquare = (rowIndx: number, colIndx: number) => {
    setGameLogger((prevTurns) => {
      let currPlayer = ActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndx, col: colIndx }, player: currPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  let gameBoard = [...initialGameBoard].map((innerArr) => [...innerArr]);

  for (const turn of gameLogger) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  const winner = checkForWin(gameBoard);
  const hasDraw = gameLogger.length === 9 && !winner;

  const GameRestart = (): void => {
    setGameLogger([]);
    setStarterSymbol("");
  };

  const selectStartingPlayer = (event: React.FormEvent<HTMLSelectElement>) => {
    const selectedSymbol = event.currentTarget.value;
    setStarterSymbol(selectedSymbol);
  };

  return (
    <>
      <div className="titleElements">
        <h1 className="title">Tic-Tac-Toe</h1>
        <img
          className="logoImg"
          src="../public/game-logo.png"
          alt="logo picture"
        />
      </div>
      <div className="playerSelector">
        <select
          className={starterSymbol === "" ? "error" : ""}
          onChange={selectStartingPlayer}
          value={starterSymbol || "0"}
          disabled={starterSymbol ? true : false}
        >
          {starterSymbol ? null : (
            <option value="0">First Select who starts</option>
          )}
          <option value="X">X</option>
          <option value="O">O</option>
        </select>
        <button className="rematch" onClick={GameRestart}>
          Rematch!
        </button>
      </div>

      <main>
        <div className="mainContainer">
          <ol id="players" className="highlight-player">
            <Player
              symbol="X"
              initialName="Player 1"
              isActive={activePlayer === "X"}
            />
            <Player
              symbol="O"
              initialName="Player 2"
              isActive={activePlayer === "O"}
            />
          </ol>
          {(winner || hasDraw) && (
            <GameOver winner={winner} GameRestart={GameRestart} />
          )}
          <GameBoard
            squareSelectProp={SelectSquare}
            turns={gameBoard}
            starterSymbol={starterSymbol}
          />
        </div>
        <Log turns={gameLogger} />
      </main>
    </>
  );
}

export default App;
