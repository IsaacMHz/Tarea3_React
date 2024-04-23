import CreateGameButton from "./components/CreateGameButton";
import GameCounter from "./components/GameCounter";
import GameList from "./components/GameList";
import GameSearch from "./components/GameSearch";
import Gameitem from "./components/Gameitem";

function App() {
  return (
    <div className="App">
      <GameCounter/>
      
      <GameSearch/>
      
      <GameList>

        <Gameitem/>
        <Gameitem/>
        <Gameitem/>
        
      </GameList>

      <CreateGameButton/>

    </div>
  );
}

export default App;
