import { useState } from "react"
import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player"
import Log from "./Components/Log"
function App() {
try{
const [activeplayer, setactiveplayer] = useState('X');
 const [gameTurns, setgameTurns] = useState([]);

function handleSelectSquare(rowIndex,colIndex){
setactiveplayer((currentActive)=>(currentActive==='X'?'O':'X'));
setgameTurns((prevTurns)=>{
  let currentPlayer='X';
  if(prevTurns.length>0 && prevTurns[0].player==='X'){
    currentPlayer='O'
  }
  const updatedTurn=[{square: {row:rowIndex,col:colIndex},
    player:currentPlayer},...prevTurns,];
  return updatedTurn;
});

}
  return (
   <><main><div id="game-container">
    <ol id="players" className="highlight-player">
<Player initialName="player 1" symbol="X"isActive={activeplayer==='X'}></Player>
<Player initialName="player 2" symbol="O"isActive={activeplayer==='O'}></Player>
    </ol>
    <GameBoard onSelectSquare={handleSelectSquare}   turns={gameTurns}></GameBoard>
<Log></Log>
    </div></main></>
  )}
  catch(e){console.log(e)}
}

export default App
