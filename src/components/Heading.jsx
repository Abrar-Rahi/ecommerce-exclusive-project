import React from 'react'

const Heading = ({text,className}) => {
  return (
    <div className={`flex gap-x-4 items-center ${className}`}>
        <div className='w-5 h-10 bg-reed rounded'></div>
        <h4 className='font-pop font-semibold text-base text-reed'>{text}</h4>
    </div>
  )
}

export default Heading