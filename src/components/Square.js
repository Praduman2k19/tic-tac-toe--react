import React from 'react'


const Square = ({value,onClick , isWinningSquare}) => {   

    return (
        <button type='button' className='square' onClick={onClick} 
            style={{background: isWinningSquare ? 'blue' : 'none'}}>
            {value}
        </button>          
    )
}


// const Square = props => {   
//     console.log(props);
//     return (
//         <button type='button' className="square" 
//             onClick={()=>{
//                 console.log(props.value)
//             }}>
//             {props.value}
//         </button>          
//     )
// }

export default Square
