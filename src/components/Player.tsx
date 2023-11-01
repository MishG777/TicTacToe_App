import React, { useState } from "react";

type TPlayer = {
  initialName: string;
  symbol: string;
  isActive: boolean;
};

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const Player: React.FC<TPlayer> = ({ symbol, initialName, isActive }) => {
  const [player, setPlayer] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const changeHandler = (e: InputEvent) => {
    setPlayer(e.target.value);
  };

  const submitHandler = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{player}</span>
        ) : (
          isEditing && (
            <input
              type="text"
              onChange={changeHandler}
              value={player}
              maxLength={14}
              required
            />
          )
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={submitHandler}>{!isEditing ? "Edit" : "Save"}</button>
      <button
        onClick={() => {
          setPlayer(initialName);
          setIsEditing(false);
        }}
      >
        Reset
      </button>
    </li>
  );
};

export default Player;
