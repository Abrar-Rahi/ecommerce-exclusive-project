import React from 'react'

const Input = ({type,placeholder,className}) => {
  return (
    <>
    <input type={type} placeholder={placeholder}  className={`border-b border-solid border-black placeholder:text-black w-full py-2 ${className}`}/>
    </>
  )
}

export default Input