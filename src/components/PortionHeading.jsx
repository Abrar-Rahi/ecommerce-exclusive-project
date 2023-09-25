import React from 'react'

const PortionHeading = ({text,className}) => {
  return (
    <h5 className={`font-pop font-medium text-base text-black ${className}`}>{text}</h5>
  )
}

export default PortionHeading