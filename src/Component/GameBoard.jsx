import { useState } from "react";
const initialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard(){
    const[gameBoard,setGameBoard]=useState(initialGameBoard);
    const handleSelectSquare=(rowIndex,colIndex)=>{
        setGameBoard((prevGameBoard)=>{
            const updatedGameBoard=[...prevGameBoard.map((innerArray)=>[...innerArray])]
            updatedGameBoard[rowIndex][colIndex]='x';
            return updatedGameBoard
        })
    }
    return(
            <ol id="game-board">
            {gameBoard.map((row,rowIndex)=>(
                <li key={rowIndex}>
                    <ol>{row.map((playerSymbol,colIndex)=><li key={colIndex}><button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button></li>)}</ol>
                </li>
            ))}
        </ol> 
    );
}