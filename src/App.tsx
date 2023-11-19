import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

import checkForWin from "./components/CheckForWin";
import GameOver from "./components/GameOver";

import { Turns } from "./components/Types/types";
import ScoreBoard from "./components/ScoreBoard";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD: (null | "X" | "O")[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveGameBoard(gameLogger) {
  let gameBoard = [...INITIAL_GAME_BOARD].map((innerArr) => [...innerArr]);

  for (const turn of gameLogger) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {
  const [gameLogger, setGameLogger] = useState<
    { square: { row: number; col: number }; player: string }[]
  >([]);

  const [starterSymbol, setStarterSymbol] = useState<string>("");
  const [playerName, setPlayerName] = useState<{
    X: string;
    O: string;
  }>(PLAYERS);

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

  const gameBoard = deriveGameBoard(gameLogger);

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

  //set player name, to output as winner

  const SetPlayerName = (symb: "X" | "O", name: string): void => {
    setPlayerName((prevPlayers) => {
      return {
        ...prevPlayers,
        [symb]: name,
      };
    });
  };

  return (
    <>
      <div className="titleElements">
        <h1 className="title">Tic-Tac-Toe</h1>
        <img className="logoImg" src="/game-logo.png" alt="logo picture" />
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
          <option value="X">X - {playerName["X"]}</option>
          <option value="O">O - {playerName["O"]}</option>
        </select>
        <button className="rematch" onClick={GameRestart}>
          Rematch!
        </button>
      </div>

      <main>
        <div className="mainContainer">
          <ScoreBoard winner={winner} />
          <ol id="players" className="highlight-player">
            <Player
              symbol="X"
              initialName={PLAYERS.X}
              isActive={activePlayer === "X"}
              onSetPlayerName={SetPlayerName}
            />
            <Player
              symbol="O"
              initialName={PLAYERS.O}
              isActive={activePlayer === "O"}
              onSetPlayerName={SetPlayerName}
            />
          </ol>
          {(winner || hasDraw) && (
            <GameOver
              winner={winner}
              GameRestart={GameRestart}
              playerName={playerName}
            />
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
