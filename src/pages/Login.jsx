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

const Login = () => {
  return (
    <section className='py-140'>
    <Container>
        <Flex className="gap-x-30">
            <div className='w-4/6'>
                <Images className="-ml-32 h-full" src={demo}/>
            </div>
            <div className='w-2/6 mt-32'>
                <MainHeading text="Log in to Exclusive"/>
                <PortionHeading text="Enter your details below" className="font-normal mt-6 mb-12"/>
                <Flex className="flex-col gap-y-10">
                   
                    <Input type="email" placeholder="Email or Phone Number"/>
                    <Input type="password" placeholder="Password"/>
                    <Flex className="items-center justify-between">
                    <Button className="" text="Log In"/>
                    <p className='font-pop cursor-pointer font-normal text-reed text-base '>Forget Password?</p>

                    </Flex>
                </Flex>
                
                
            </div>
        </Flex>
    </Container>
</section>
  )
}

export default Login