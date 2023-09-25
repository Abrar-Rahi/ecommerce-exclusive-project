import React from 'react'
import PhoneIcons from './icons/PhoneIcons'




const Category = ({children}) => {
  return (
    <div className='w-170  h-145 border border-solid border-black/.3 rounded flex flex-col items-center justify-center gap-y-4 font-pop font-normal text-black hover:bg-reed hover:text-white duration-300'>{children}</div>
  )
}

export default Category