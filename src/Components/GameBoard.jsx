import React, { useState } from 'react'
const initalGameBoard=[
[null,null,null],
[null,null,null],
[null,null,null],
];

const GameBoard = ({onSelectSquare,turns}) => {
    let gameBoard=initalGameBoard;
for (const turn  of turns){
    const{square,player}=turn;
    const {row,col}=square;
    gameBoard[row][col]=player;
}

//     const [GameBoard, setGameBoard] = useState(initalGameBoard)
//     function handleSquareSelection(rowIndex,colIndex){
//         setGameBoard((prev)=>{
//             const updatedBoard=[...prev.map(innerArray=>[...innerArray])];
//         updatedBoard[rowIndex][colIndex]=activePlayer
//         return updatedBoard;

//         });
// onSelectSquare();
//         }
  return (
    <>
  <ol id='game-board'>{gameBoard.map((row,index)=>
    <li key={index}>
    <ol>
        {row.map((playerSymbol,colIndex)=><li key={colIndex}>
            <button onClick={()=>onSelectSquare(index,colIndex)}>{playerSymbol}</button></li>)}
    </ol>
  </li>)}</ol>
    </>
  )
}

export default GameBoard