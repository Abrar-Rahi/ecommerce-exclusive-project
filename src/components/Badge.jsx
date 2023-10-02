import React from 'react'

const Badge = ({text,className,type}) => {
  return (
    <button className={`font-pop font-normal text-sWhite text-xs py-1 px-3  rounded absolute top-3 left-3 ${type== "redType" ? " bg-reed" : type == "greenType" ? "bg-gren" : ""} ${className}`}>{text}</button>
  )
}

export default Badge