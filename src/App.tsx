import React from "react";
import Player from "./components/Player";

function App() {
  return (
    <main>
      <div className="mainContainer">
        <ol className="players">
          <Player symbol="X" />
          <Player symbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
