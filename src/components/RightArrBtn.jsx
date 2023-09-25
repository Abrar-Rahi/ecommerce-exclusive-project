import React from 'react'
import {FiArrowRight} from 'react-icons/fi'

const RightArrBtn = ({className}) => {
  return (
    <button className={`flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-2xl ${className}`}>
          <FiArrowRight/>
    </button>
  )
}

export default RightArrBtn