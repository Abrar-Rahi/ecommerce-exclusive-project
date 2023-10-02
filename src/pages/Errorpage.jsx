import React from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <section className='py-140'>
       <Container>
         <Flex className="flex-col gap-y-20 items-center justify-center">
            <h1 className='font-inter font-medium text-110 text-black'>404 Not Found</h1>
            <p className='font-pop font-normal text-base text-black'>Your visited page not found. You may go home page.</p>
            <Link to="/">
            <Button text="Back to home page"/>
            </Link>
         </Flex>
       </Container>
    </section>
  )
}

export default Errorpage