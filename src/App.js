import React, { useState } from 'react';
import './App.css';
import Board from './components/Board'
import History from './components/History';
import Square from './components/Square';
import { calculateWinner } from './helpers';
import './SCSS/root.scss'

function App() {

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [history , setHistory]=useState([{board:Array(9).fill(null),isXNext:true}]);  
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [currentMove,setCurrentMove]=useState(0);

      const current=history[currentMove];


      const winner = calculateWinner(current.board);
      console.log(winner)
      if(winner!=null)
      var message=winner ? `${winner}'s player is winner` : `${current.isXNext ? 'X' : 'O'}'s player is winner`;
      console.log(history);


      const handSquareClick=position=>{
          if(current.board[position]||winner)
          return ;
          setHistory(prev=>{
            const last=prev[prev.length - 1];
              const newBoard= last.board.map((square,pos)=>{
                  if(pos===position)
                  return last.isXNext ? 'X' : 'O';
                  return square;
              });
              return prev.concat({board:newBoard,isXNext:!last.isXNext});
          });
          setCurrentMove(prev=>prev+1);
      };
  
      const moveTo =(move)=>{
        setCurrentMove(move);
      }
  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1> <br></br><br></br>
      <Board board={current.board} handSquareClick={handSquareClick} />
      <h2>{message}</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
