import React from 'react'
import PortionHeading from './PortionHeading'
import Images from './Images'

const Policy = ({text,src,text2}) => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center'>
        <Images src={src}/>
        <PortionHeading className="mt-6 mb-2 font-semibold text-xl" text={text}/>
        <p className='font-pop font-normal text-sm text-black'>{text2}</p>
    </div>
    </div>
  )
}

export default Policy