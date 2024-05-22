import Player from "./Component/Player"
import GameBoard from "./Component/GameBoard.jsx"
import { useState } from "react"
function App() {
  const[activeplayer,setActivePlayer]=useState('X');
  const handleSelectSquare=()=>{
    setActivePlayer((currentPlayer)=>currentPlayer==='X'?'O':'X')
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player player='player 1' symbol="X" isActive={activeplayer==="X"}/>
          <Player player= 'player 2' symbol="O" isActive={activeplayer==="O"}/>
          
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activeplayer}/>
      </div>
    </main>
  )
}

export default App
