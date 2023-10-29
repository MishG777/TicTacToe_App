import React from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
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
          <ol className="players">
            <Player symbol="X" initialName="Player 1" />
            <Player symbol="O" initialName="Player 2" />
          </ol>
          <GameBoard />
        </div>
      </main>
    </>
  );
}

export default App;
