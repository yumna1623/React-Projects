import React from 'react'
import "./index.css"

const Button = ({title ,myFunc}) => {
  return (

    <button onClick={myFunc} className='btn'>{title}</button>
    
  )
}

export default Button
