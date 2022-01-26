import React from 'react'


const Square = ({value,onClick}) => {   

    return (
    <button type='button' className='square' onClick={onClick}>{value}</button>          
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
