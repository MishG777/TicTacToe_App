import React, { useState } from "react";

type TPlayer = {
  name?: string;
  symbol: string;
};

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type BtnEvent = React.MouseEvent<HTMLButtonElement>;

const Player: React.FC<TPlayer> = ({ symbol }) => {
  const [player, setPlayer] = useState("Player");
  const [isEditing, setIsEditing] = useState(false);

  const changeHandler = (e: InputEvent) => {
    setPlayer(e.target.value);
  };

  const submitHandler = (e: BtnEvent) => {
    e.preventDefault();
    setIsEditing((prev) => !prev);
  };

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{player}</span>
        ) : (
          isEditing && <input type="text" onChange={changeHandler} />
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={submitHandler}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
};

export default Player;
