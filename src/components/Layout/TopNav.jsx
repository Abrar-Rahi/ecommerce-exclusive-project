import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import {BsChevronDown} from "react-icons/bs"

const TopNav = () => {
  return (
    <div className='bg-black py-3'>
        <Container>
          
          <Flex>
           <div className='flex gap-x-2 mx-auto ml-[320px]'>
           <p className='font-pop font-normal text-sm text-sWhite'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
           <button className='font-pop font-semibold text-sm text-sWhite border-b border-solid border-sWhite'>Shop Now</button>
           </div>
           
           <div className='flex items-center gap-x-1'>
           <button className='font-pop font-semibold text-sm text-sWhite'>English</button>
           <BsChevronDown className='text-white'/>
           </div>
           </Flex>
          
        </Container>
    </div>
  )
}

export default TopNav