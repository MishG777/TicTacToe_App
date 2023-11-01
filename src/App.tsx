import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [gameLogger, setGameLogger] = useState<
    { square: { row: number; col: number }; player: string }[]
  >([]);
  const [activePlayer, setActivePlayer] = useState("X");

  const SelectSquare = (rowIndx: number, colIndx: number) => {
    setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
    setGameLogger((prevTurns) => {
      let currPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndx, col: colIndx }, player: currPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
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
          <GameBoard squareSelectProp={SelectSquare} turns={gameLogger} />
        </div>
        <Log />
      </main>
    </>
  );
}

export default App;
