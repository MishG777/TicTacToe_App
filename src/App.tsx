import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

type Turns = {
  square: {
    row: number;
    col: number;
  };
  player: string;
}[];

const ActivePlayer = (player: Turns) => {
  let currPlayer = "X";

  if (player.length > 0 && player[0].player === "X") {
    currPlayer = "O";
  }
  return currPlayer;
};

function App() {
  const [gameLogger, setGameLogger] = useState<
    { square: { row: number; col: number }; player: string }[]
  >([]);

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

  //if (gameLogger.length === 9) {
  //  console.log(gameLogger);
  //}

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
        <Log turns={gameLogger} />
      </main>
    </>
  );
}

export default App;
