import { useState } from "react"
import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player"
import Log from "./Components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./Components/GameOver"
const initalGameBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null],
  ];

function deriveActivePlayer(gameTurns){
  let currentPlayer='X';
  if(gameTurns.length>0 && gameTurns[0].player==='X'){
    currentPlayer='O';
  }
return currentPlayer;
}
function App() {
try{
const [players, setPlayers] = useState({X:'Player 1',O:'Player 2'})
 const [gameTurns, setgameTurns] = useState([]);
 let activePlayer=deriveActivePlayer(gameTurns);
 let gameBoard=[...initalGameBoard.map(array=>[...array])]
 for (const turn  of gameTurns){
     const{square,player}=turn;
     const {row,col}=square;
     gameBoard[row][col]=player;
 }
let winner=null;

for (const combination of WINNING_COMBINATIONS){
const firstSquareSymbol=gameBoard[combination[0].row][combination[0].column]
const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column]
const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column]
if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
winner=players[firstSquareSymbol];
}
}
const hasDraw=gameTurns.length===9 && !winner;
function handleSelectSquare(rowIndex,colIndex){
setgameTurns((prevTurns)=>{
  let currentPlayer=deriveActivePlayer(prevTurns);
  const updatedTurn=[{square: {row:rowIndex,col:colIndex},
    player:currentPlayer},...prevTurns,];
  return updatedTurn;
});
}
function handleRematch(){
  setgameTurns([]);
  }

function handlePlayerNameChange(symbol,newName){
setPlayers(prevPlayers=>{
  return {...prevPlayers,[symbol]:newName}
});
}
  return (
   <><main><div id="game-container">
    <ol id="players" className="highlight-player">
<Player initialName="player 1" symbol="X"isActive={activePlayer==='X'} onChangeName={handlePlayerNameChange}></Player>
<Player initialName="player 2" symbol="O"isActive={activePlayer==='O'} onChangeName={handlePlayerNameChange}></Player>
    </ol>
    <GameBoard onSelectSquare={handleSelectSquare}   board={gameBoard}></GameBoard>
{(winner || hasDraw) && <GameOver winner={winner} handleRematch={handleRematch}></GameOver>}
    </div><Log turns={gameTurns}></Log></main></>
  )}
  catch(e){console.log(e)}
}

export default App
