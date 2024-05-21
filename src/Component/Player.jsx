import { useState } from "react";
export default function Player({name,symbol}){
   let [isEditing,setIsEditing]=useState(false);
   const playerNameEdit=()=>{
        setIsEditing(true);
   }
    return(
        <>
        <li>
            <span className="player">
            {isEditing?<input type="text" required></input>:<span className="player-name">Player {name}</span>}
            
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={()=>playerNameEdit()}>Edit</button>
          </li>
        </>

    );
}