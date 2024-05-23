// import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare ,turns}) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const handleSelectSquare = (rowIndex, colIndex) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = prevGameBoard.map((row, rIndex) =>
  //       row.map((cell, cIndex) =>
  //         rIndex === rowIndex && cIndex === colIndex ? activePlayerSymbol : cell
  //       )
  //     );
  //     return updatedGameBoard;
  //   });
  //   onSelectSquare();
  // };
  let gameBoard=initialGameBoard;
  for(const turn of turns){
    const{square,player}=turn;
    const {row,col}=square;

    gameBoard[row][col]=player;

  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol!=null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
