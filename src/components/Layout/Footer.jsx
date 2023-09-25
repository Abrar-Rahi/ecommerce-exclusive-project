import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import logoWhite from "../../assets/logoWhite.png"
import Qrcode from "../../assets/Qrcode .png"
import GooglePlay from "../../assets/GooglePlay.png"
import AppStore from "../../assets/AppStore.png"
import PortionHeading from '../PortionHeading'
import {AiOutlineSend,AiOutlineTwitter,AiOutlineInstagram,AiFillLinkedin,AiFillFacebook} from 'react-icons/ai'

import List from '../List'

const Footer = () => {
  return (
    <footer className='bg-black py-20'>
        <Container>
            <Flex className="gap-x-87">
                <div className='w-3/12'>
                    <Images src={logoWhite}/>
                    <PortionHeading className='text-xl text-sWhite my-6' text="Subscribe"/>
                    <p className='w-206 font-pop font-normal text-base text-sWhite mt-6 mb-4'>Get 10% off your first order</p>
                   <div className='relative'>
                        <input type="text" className='w-full py-3 font-pop font-normal text-base text-sWhite rounded pl-4 bg-transparent border border-solid border-sWhite placeholder:font-pop placeholder:font-normal placeholder:text-xs' placeholder='Enter your email' />
                        <AiOutlineSend className='text-sWhite absolute top-1/2 -translate-y-1/2 right-4 text-xl'/>
                   </div>
                </div>

                <div className='w-3/12'>
                <PortionHeading className='text-xl text-sWhite' text="Support"/>
                <p className='font-pop font-normal text-base text-sWhite mt-6 mb-4'>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p className='font-pop font-normal text-base text-sWhite mt-4 mb-4'>exclusive@gmail.com</p>
                <p className='font-pop font-normal text-base text-sWhite'>+88015-88888-9999</p>
                </div>

                <div className='w-3/12'>
                <PortionHeading className='text-xl text-sWhite ' text="Account"/>
                <ul className='flex flex-col gap-y-4 mt-6'>
                    <List className="text-sWhite after:hover:h-0" text='My Account'/>
                    <List className="text-sWhite after:hover:h-0" text='Login / Register'/>
                    <List className="text-sWhite after:hover:h-0" text='Cart'/>
                    <List className="text-sWhite after:hover:h-0" text='Wishlist'/>
                    <List className="text-sWhite after:hover:h-0" text='Shop'/>
                </ul>
                </div>
                <div className='w-3/12'>
                <PortionHeading className='text-xl text-sWhite ' text="Quick Link"/>
                <ul className='flex flex-col gap-y-4 mt-6'>
                    <List className="text-sWhite after:hover:h-0" text='Privacy Policy'/>
                    <List className="text-sWhite after:hover:h-0" text='Terms Of Use'/>
                    <List className="text-sWhite after:hover:h-0" text='FAQ'/>
                    <List className="text-sWhite after:hover:h-0" text='Wishlist'/>
                    
                </ul>
                </div>
                <div className='w-4/12'>
                <PortionHeading className='text-xl text-sWhite ' text="Download App"/>
                <p className='font-pop font-medium text-xs text-sWhite mt-6 mb-2'>Save $3 with App New User Only</p>
                <Flex className="gap-x-2">
                    <div>
                        <Images src={Qrcode}/>
                    </div>
                    <div>
                        <Images className="mb-1" src={GooglePlay}/>
                        <Images src={AppStore}/>
                    </div>
                </Flex>
                <Flex className="gap-x-6 mt-6">
                   <AiFillFacebook className='text-white'/>
                   <AiOutlineTwitter className='text-white'/>
                   <AiOutlineInstagram className='text-white'/>
                   <AiFillLinkedin className='text-white'/>
                </Flex>
                </div>
            </Flex>
        </Container>
    </footer>
  )
}

export default Footer