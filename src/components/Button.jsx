import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`font-pop font-medium text-sWhite text-base py-4 px-12 bg-reed rounded hover:bg-transparent hover:text-reed hover:border-reed duration-300 ease-in border border-solid border-red ${className}`}>{text}</button>
  )
}

export default Button