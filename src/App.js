import React, { useState } from 'react';
import './App.css';
import Board from './components/Board'
import History from './components/History';
import Square from './components/Square';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helpers';
import './SCSS/root.scss'

const NEW_GAME=[{board:Array(9).fill(null),isXNext:true}];
function App() {

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [history , setHistory]=useState(NEW_GAME);  
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [currentMove,setCurrentMove]=useState(0);

      const current=history[currentMove];


      const {winner , winningSquares} = calculateWinner(current.board);
      console.log(winner)
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
      const onNewGame=()=>{
        setHistory(NEW_GAME);
        setCurrentMove(0);
      }
      const noMoreLeft=current.board.every((el)=> el!==null);
  return (
    <div className="app">
      <h1>Tic-<span className='text-green'>Tac</span>-Toe</h1> 
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handSquareClick={handSquareClick} winningSquares={winningSquares} />
      <button onClick={onNewGame} className={`btn-reset ${(winner || noMoreLeft) ? 'active' : ''}`}>Start new Game</button>
      <h2 style={{fontWeight : 'normal'}}>Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className='bg-balls' />
    </div>
  );
}

export default App;
