
import React from 'react'
import {FiArrowLeft} from 'react-icons/fi'

const LeftArrBtn = ({className}) => {
  return (
    <button className={`flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-2xl ${className}`}>
          <FiArrowLeft/>
    </button>
  )
}

export default LeftArrBtn