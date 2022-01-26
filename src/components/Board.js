import React, { useState } from 'react'
import Square from './Square'

export const board = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [board , setBoard]=useState(Array(9).fill(null));

    console.log(board);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isXNext,setIsXNext]=useState(false);
    const handSquareClick=position=>{
        if(board[position])
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

    const randerSquare = position =>{
        return(
            <Square
            value={board[position]}
            onClick={()=>handSquareClick(position) }
            />
        );
    }


    return (
        <div className='board'>

            <div className='board-row'>
                {randerSquare(0)}
                {randerSquare(1)}
                {randerSquare(2)}
            </div>

            <div className='board-row'>
                {randerSquare(3)}
                {randerSquare(4)}
                {randerSquare(5)}
            </div>

            <div className='board-row'>
                {randerSquare(6)}
                {randerSquare(7)}
                {randerSquare(8)}
            </div>

        </div>
    )
}

export default board