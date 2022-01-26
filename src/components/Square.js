import React from 'react'
// const Square = ({value,children}) => {   
//     console.log(children);
//     return (
//         <button type='button'>{children}</button>          
//     )
// }


const Square = props => {   
    console.log(props);
    return (
        <button type='button' className="square">{props.value}</button>          
    )
}

export default Square
