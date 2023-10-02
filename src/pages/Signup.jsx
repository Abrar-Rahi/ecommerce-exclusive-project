import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Images from '../components/Images'
import demo from '../assets/demo.webp'
import PortionHeading from '../components/PortionHeading'
import MainHeading from '../components/MainHeading'
import Input from '../components/Input'
import Button from '../components/Button'
import List from '../components/List'
import {FcGoogle} from "react-icons/fc"
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <section className='py-140'>
        <Container>
            <Flex className="gap-x-30">
                <div className='w-4/6'>
                    <Images className="-ml-32 h-full" src={demo}/>
                </div>
                <div className='w-2/6 mt-32'>
                    <MainHeading text="Create an account"/>
                    <PortionHeading text="Enter your details below" className="font-normal mt-6 mb-12"/>
                    <Flex className="flex-col gap-y-10">
                        <Input type="text" placeholder="Name"/>
                        <Input type="email" placeholder="Email or Phone Number"/>
                        <Input type="password" placeholder="Password"/>
                        <Button className="w-full" text="Create Account"/>
                    </Flex>
                    <button className='font-pop font-medium text-black text-base py-4 px-12 bg-transparent rounded w-full border border-solid border-black flex items-center gap-x-5 justify-center mt-4 mb-8'> <FcGoogle className="text-2xl"/> Sign up with Google </button>
                    <Flex className="items-center gap-x-4 justify-center">
                        <PortionHeading className="font-normal" text="Already have account?"/>
                        <Link to="/login">
                          <List className="font-semibold" text="Log in"/>
                        </Link>
                    </Flex>
                    
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Signup