import React, { useState, useEffect } from "react";

type PlayerScores = {
  playerX: number;
  playerO: number;
};

type ScoreBoardProps = {
  winner: "X" | "O" | null;
};

const ScoreBoard = ({ winner }: ScoreBoardProps): React.JSX.Element => {
  const [playerScores, setPlayerScores] = useState<PlayerScores>({
    playerX: 0,
    playerO: 0,
  });

  useEffect(() => {
    console.log("Effect triggered with winner:", winner);
    if (winner === "X") {
      setPlayerScores((prevScore) => {
        return {
          ...prevScore,
          playerX: prevScore.playerX + 1,
        };
      });
    } else if (winner === "O") {
      setPlayerScores((prevScore) => {
        return {
          ...prevScore,
          playerO: prevScore.playerO + 1,
        };
      });
    }
  }, [winner]);

  const clearScores = () => {
    setPlayerScores({
      playerX: 0,
      playerO: 0,
    });
  };

  return (
    <ol className="scoreBox">
      <li>
        <h2>{playerScores.playerX}</h2>
      </li>
      <button onClick={clearScores} className="ScoreButton">
        clear Scores
      </button>
      <li>
        <h2>{playerScores.playerO}</h2>
      </li>
    </ol>
  );
};

export default ScoreBoard;
