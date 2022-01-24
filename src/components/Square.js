import React from 'react'


const Square = ({value}) => {   
    console.log(value);
    return (
        <button type='button'>{value}</button>          
    )
}


// const Square = props => {   
//     console.log(props);
//     return (
//         <button type='button'>{props.value}</button>          
//     )
// }

export default Square
