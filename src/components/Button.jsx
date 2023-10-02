import React from 'react'

const Button = ({text,className,type}) => {
  return (
    <button className={`font-pop font-medium  text-base py-4 px-12 rounded duration-300 ease-in border border-solid ${type == "transparent" ? "bg-transparent border-black text-black" : "text-sWhite bg-reed hover:bg-transparent hover:text-reed hover:border-reed  border-red"} ${className}`}>{text}</button>
  )
}

export default Button