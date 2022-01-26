import React, { useState } from 'react';
import './App.css';
import Board from './components/Board'
import Square from './components/Square';
import { calculateWinner } from './helpers';
import './SCSS/root.scss'

function App() {

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [board , setBoard]=useState(Array(9).fill(null));  
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [isXNext,setIsXNext]=useState(false);

      console.log("board", "rerander");


      const winner = calculateWinner(board)
      console.log(winner)
      if(winner!=null)
      var message=winner ? `${winner}'s player is winner` : `${isXNext ? 'X' : 'O'}'s player is winner`;


      const handSquareClick=position=>{
          if(board[position]||winner)
          return ;
          setBoard(prev=>{
              return prev.map((square,pos)=>{
                  if(pos===position)
                  return isXNext ? 'X' : 'O';
                  return square;
              });
          });
          setIsXNext(prev=>!prev);
      };
  

  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1> <br></br><br></br>
      <Board board={board} handSquareClick={handSquareClick} />
      <h2>{message}</h2>
    </div>
  );
}

export default App;
