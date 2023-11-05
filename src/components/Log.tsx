import React from "react";

type Turns = {
  turns: {
    square: {
      row: number;
      col: number;
    };
    player: string;
  }[];
};

const Log = ({ turns }: Turns): JSX.Element => {
  return (
    <ol className="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>{`${
          "Player: " + turn.player
        } ${"Row: " + (turn.square.row + 1)} ${
          "Column: " + (turn.square.col + 1)
        }`}</li>
      ))}
    </ol>
  );
};

export default Log;
