import React from 'react';

const StatusMessage = ({winner , current}) => {

    const noMoreLeft=current.board.every((el)=> el!==null);
  return(
      <div className='status-message '>
          
          {winner && <> <span className={winner==='X' ? 'text-green' : 'text-orange'}>{winner}</span>'s player is winner </>}
          {!winner && !noMoreLeft && <> Next player is <span className={current.isXNext ? 'text-green' : 'text-orange' } >{current.isXNext ? 'X' : 'O'}</span></>}
          {! winner && noMoreLeft && <><span className='text-green'>X</span> and <span className='text-orange'>O </span>tied</>}

      </div>
  )
};

export default StatusMessage;
