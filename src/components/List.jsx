import React from 'react'

const List = ({text,className}) => {
  return (
    <li className={`font-pop p-0.5 cursor-pointer  font-normal text-black text-base list-none  relative after:w-full after:h-0 after:bg-black after:absolute after:bottom-0 after:left-0 after:hover:h-px ${className}`}>{text}</li>
  )
}

export default List