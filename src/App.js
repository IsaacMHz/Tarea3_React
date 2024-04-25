import React from "react";
import CreateGameButton from "./components/CreateGameButton";
import GameCounter from "./components/GameCounter";
import GameList from "./components/GameList";
import GameSearch from "./components/GameSearch";
import Gameitem from "./components/Gameitem";

const defaultGames = [
  { text: 'God of war', completed: false },
  { text: 'Halo Rearch', completed: true },
  { text: 'Lol', completed: false },
  { text: 'Fornite', completed: false },
  { text: 'Gears of war', completed: true },
]

const check = [ 
  {text: 'v', completed:false},
  {text: '', completed:true},
]

function App() {

  const localStorageGames = localStorage.getItem('Games');
  let parsedGames;

  if(!localStorageGames){
    localStorage.setItem('Games', JSON.stringify(defaultGames))
    parsedGames = [];
  }else{
    parsedGames = JSON.parse(localStorageGames)
  }

  const [games, setGames] = React.useState(parsedGames);
  const [searchValue,setSearchValue] = React.useState('');

  //Estados derivados
  const gamesCompleted = games.filter((game)=> game.completed).length;
  const totalGames = games.length;

  //Estado derivado para las bisquedas
  const searchGames = games.filter((game) => game.text.includes(searchValue))

  const saveGames = (newGames) => {
    localStorage.setItem('Games',JSON.stringify(newGames));
    setGames(newGames);
  }

  const completeGame = (text) => {
    const newGames = [...games];
    const gameIndex = newGames.findIndex((game) => game.text == text)
    newGames[gameIndex].completed = true;
    saveGames(newGames);
  }

  const deleteGame = (text) => {
    const newGames = [...games];
    const gameIndex = newGames.findIndex((game) => game.text == text)
    newGames.splice(gameIndex,1);
    saveGames(newGames);
  }

  return (
    <div className="App">

      <GameCounter completed = {gamesCompleted} total={totalGames}/>
      
      <GameSearch searchValue ={searchValue} setSearchValue={setSearchValue}
      />
      
      <GameList>

        {searchGames.map((game,index)=>(
             <Gameitem
             key={index}
             text = {game.text}
             completed ={game.completed}
             onComplete={() => completeGame(game.text)}
             onDelete={() => deleteGame(game.text)}
             />
        ))}
        
      </GameList>

      <CreateGameButton/>

    </div>
  );
}

export default App;
