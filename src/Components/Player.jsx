import React, { useState } from 'react'

const Player = ({initialName,symbol,isActive}) => {
    const [editButton, seteditButton] = useState(false)
    const [playerName, setplayerName] = useState(initialName)
    function handleEditClick(){
seteditButton((editButton)=>!editButton);
    }
    function onNameChange(event){
      console.log(event);
      setplayerName(event.target.value)
    }
  return (
    <>
    <li className={isActive?'active':undefined}>
  <span className="player">
  {editButton?<input type='text' required  value={playerName}
  onChange={onNameChange}
  ></input>:<span className="player-name">{playerName}</span>}
  <span className="player-symbol">{symbol}</span>
  <button onClick={handleEditClick}>{editButton ? 'Save':'Edit'}</button>
  </span>
</li></>
  )
}

export default Player