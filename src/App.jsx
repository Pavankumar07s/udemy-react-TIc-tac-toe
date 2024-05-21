import Player from "./Component/Player"
import GameBoard from "./Component/GameBoard.jsx"
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player player='player 1' symbol="X"/>
          <Player player= 'player 2' symbol="O"/>
          
        </ol>
        <GameBoard/>
      </div>
    </main>
  )
}

export default App
