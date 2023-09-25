import React from 'react'

const MainHeading = ({text,className}) => {
  return (
    <h3 className={`font-lora font-semibold text-4xl text-black tracking-4 ${className}`}>{text}</h3>
  )
}

export default MainHeading