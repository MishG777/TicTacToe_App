export type Turns = {
  square: {
    row: number;
    col: number;
  };
  player: string;
}[];

export type Props = {
  squareSelectProp: (rowInd: number, colIndx: number) => void;
  turns: (string | null)[][];
  starterSymbol: string;
};

export type TPlayer = {
  initialName: string;
  symbol: "X" | "O";
  isActive: boolean;
  onSetPlayerName: (x: "X" | "O", y: string) => void;
};

export type InputEvent = React.ChangeEvent<HTMLInputElement>;

export type TProps = {
  winner: string | null;
  GameRestart: () => void;
  playerName: {
    X: string;
    O: string;
  };
};
