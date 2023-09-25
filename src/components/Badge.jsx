import React from 'react'

const Badge = ({text,className}) => {
  return (
    <button className={`font-pop font-normal text-sWhite text-xs py-1 px-3 bg-reed rounded absolute top-3 left-3 ${className}`}>{text}</button>
  )
}

export default Badge