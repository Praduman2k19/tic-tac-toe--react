import React from 'react';

const StatusMessage = ({winner , current}) => {

    const noMoreLeft=current.board.every((el)=> el!==null);
  return(
      <h2>
          
          {winner && `${winner}'s player is winner`}
          {!winner && !noMoreLeft && `Next player is ${current.isXNext ? 'X' : 'O'}`}
          {! winner && noMoreLeft && 'Game tied.'}
      </h2>
  )
};

export default StatusMessage;
