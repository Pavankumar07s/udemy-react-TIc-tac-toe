import Player from "./Component/Player"
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player player="1" symbol="X"/>
          <Player player="2" symbol="O"/>
          
        </ol>
        game board
      </div>
    </main>
  )
}

export default App
