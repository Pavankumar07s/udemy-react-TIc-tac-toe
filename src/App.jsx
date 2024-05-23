import Player from "./Component/Player"
import GameBoard from "./Component/GameBoard.jsx"
import { useState } from "react"
import Log from "./Component/Log.jsx";
function App() {
  const [gameTurn,setGameTurn]=useState([])
  const[activeplayer,setActivePlayer]=useState('X');

  const handleSelectSquare=(rowIndex,colIndex)=>{
    setActivePlayer((currentPlayer)=>currentPlayer==='X'?'O':'X')
    setGameTurn(prevTurns=>{
      let currentPlayer="X"
      if(prevTurns.length>0&&prevTurns[0].player==='X'){currentPlayer='O'}

      const updateTurn=[{square:{
        row:rowIndex,col:colIndex,player:currentPlayer
      }},...prevTurns]

      return updateTurn;
    })

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
      <Log/>
    </main>
  )
}

export default App
