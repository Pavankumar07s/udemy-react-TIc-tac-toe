import Player from "./Component/Player";
import GameBoard from "./Component/GameBoard.jsx";
import { useState } from "react";
import Log from "./Component/Log.jsx";

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurn(prevTurns => {
      const currentPlayer = activePlayer;
      const newTurn = { square: { row: rowIndex, col: colIndex }, player: currentPlayer };
      return [newTurn, ...prevTurns];
    });

    setActivePlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X');
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player player='player 1' symbol="X" isActive={activePlayer === "X"} />
          <Player player='player 2' symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurn} />
      </div>
      <Log turns={gameTurn}/>
    </main>
  );
}

export default App;
