import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import logo from "../../assets/Exclusive.png"
import List from '../List'
import {AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai'
import {MdFavoriteBorder} from "react-icons/md"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="pt-10 border-b border-solid border-bdrclr pb-4">
      <Container>
       <Flex className="items-center">
        <div className='w-1/5'>
            <Images src={logo}/>
        </div>
        <div className='w-3/5'>
            <ul className='flex gap-x-12 ml-120'>
              <Link to="/">
                <List text="Home"/>
              </Link>

              <Link to="/contact">
                <List text="Contacts"/>
              </Link>

              <Link to="/about">
                <List text="About"/>
              </Link>

              <Link to="/sign-up">
                <List text="Sign Up"/>
              </Link>
            </ul>
        </div>
        <div className='w-2/5 '>
            <Flex className="items-center gap-x-6 justify-end">
            <div className='relative'>
            <input className=' py-2 pl-5 rounded bg-secondary w-250 placeholder:font-pop placeholder:font-normal placeholder:text-xs' placeholder='What are you looking for?'/>
            <AiOutlineSearch className='absolute top-1/2 -translate-y-1/2 right-3'/>
            </div>
            <Flex className="gap-x-4">
            <MdFavoriteBorder className='text-2xl text-black'/>
            <AiOutlineShoppingCart className='text-2xl text-black'/>
            </Flex>
            </Flex>
        </div>
       </Flex>
    </Container>
    </nav>
  )
}

export default Navbar