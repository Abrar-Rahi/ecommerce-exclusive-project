import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import MainHeading from '../components/MainHeading'
import {FaStarOfLife} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import Images from '../components/Images'
import bks from "../assets/bks.png"
import nagad from "../assets/nagad.png"
import master from "../assets/master.png"
import visa from "../assets/visa.png"
import Button from '../components/Button'

const Checkoutpage = () => {
    let cartData = useSelector(state => state.cartItem.value)
  return (
    <section className='py-140'>
        <Container>
            <Flex className="gap-x-170">
                <div className='w-1/2'>
                    <MainHeading text="Billing Details"/>
                    <Flex className="flex-col gap-y-12 mt-12 mb-8  ">
                        <div className='relative'>
                            <label htmlFor="">First Name</label>
                            <FaStarOfLife className='text-reed text-6 absolute top-8% left-16%'/>
                            <input type="text" className='block w-full bg-secondary h-12 rounded mt-2' />
                        </div>
                        <div>
                            <label htmlFor="">Company Name</label>
                            <input type="text" className='block w-full bg-secondary h-12 rounded mt-2' />
                        </div>
                        <div className='relative'>
                            <label htmlFor="">Street Address</label>
                            <FaStarOfLife className='text-reed text-6 absolute top-8% left-21%'/>
                            <input type="text" className='block w-full bg-secondary h-12 rounded mt-2' />
                        </div>
                        <div>
                            <label htmlFor="">Apartment, floor, etc. (optional)</label>
                            <input type="text" className='block w-full bg-secondary h-12 rounded mt-2' />
                        </div>
                        <div className='relative'>
                            <label htmlFor="">Town/City</label>
                            <FaStarOfLife className='text-reed text-6 absolute top-8% left-15%'/>
                            <input type="text" className='block w-full bg-secondary h-12 rounded mt-2' />
                        </div>
                        <div className='relative'>
                            <label htmlFor="">Phone Number</label>
                            <FaStarOfLife className='text-reed text-6 absolute top-8% left-23%'/>
                            <input type="text" className='block w-full bg-secondary h-12 rounded mt-2' />
                        </div>
                        <div className='relative'>
                            <label htmlFor="">Email Address</label>
                            <FaStarOfLife className='text-reed text-6 absolute top-8% left-21%'/>
                            <input type="text" className='block w-full bg-secondary h-12 rounded mt-2' />
                        </div>
                    </Flex>

                    <Flex className="gap-x-4 font-pop font-normal text-base text-black">
                        <input id='tick' className='w-6 h-6 opacity-0 peer/tick ' type="checkbox" />
                        <label for='tick' className='relative after:absolute after:top-[3.5px] after:-left-35 after:w-4 after:h-4 after:bg-transfarent after:peer-checked/tick:bg-reed  before:absolute before:top-[0.25px] before:-left-10 before:w-6 before:h-6 before:border before:border-solid before:border-reed'>Save this information for faster check-out next time</label>
                    </Flex>
                </div>

                <div className='w-1/2 mt-32'>
                   {cartData.map(item =>(
                     <>
                     <div className='flex justify-between items-center py-2 px-1 rounded mb-8 w-425  bg-cartBG'>
                        <div className='flex gap-x-6'>
                            <Images className="w-10 h-10" src={item.img}/>
                            {item.name.split(" ")[0] + " " + item.name.split(" ")[item.name.split(" ").length-1]}
                        </div>
                        <div>
                            ${item.rate.replace("$","") * item.quantity}
                        </div>
                     </div>
                     </>
                   ))}

                <div className='flex flex-col gap-y-5 w-425'>
                    <div className='flex item-center justify-between font-pop font-normal text-base text-black'>
                        <p>Subtotal:</p>
                        <p>1750$</p>
                    </div>

                    <div className='w-full h-px bg-black '></div>

                    <div className='flex item-center justify-between font-pop font-normal text-base text-black'>
                    <p>Shipping:</p>
                    <p>free</p>
                    </div>

                    <div className='w-full h-px bg-black '></div>

                    <div className='flex item-center justify-between font-pop font-normal text-base text-black'>
                    <p>Total:</p>
                    <p>1750$</p>
                    </div>
                </div>

            <Flex className="justify-between w-425 my-8">
                <Flex className="items-center gap-x-2 mb-8">
                    <div className='ml-8'>
                        <input  className='w-6 h-6 hidden peer/pay' type="checkbox" id='pay'/>
                        <label for='pay' className='font-pop font-normal text-base text-black  relative after:absolute after:top-1 after:-left-7 after:w-4 after:h-4 after:rounded-full after:bg-transfarent after:contant[""]   before:absolute before:top-0 before:-left-8 before:w-6 before:h-6 before:rounded-full before:border-2 before:border-solid before:border-black before:content[""]   after:peer-checked/pay:bg-black' >Bank</label>
                    </div>
                </Flex>
                <Flex className="gap-x-2">
                    <Images className="w-10 h-7" src={bks}/>
                    <Images className="w-10 h-7" src={visa}/>
                    <Images className="w-10 h-7" src={master}/>
                    <Images className="w-10 h-7" src={nagad}/>
                </Flex>
            </Flex>
            <Flex className="items-center gap-x-2">
                <div className='ml-8'>
                <input className='w-6 h-6 hidden peer/pay1' type="checkbox" id='pay1'/>
                <label for='pay1' className='font-pop font-normal text-base text-black  relative after:absolute after:top-1 after:-left-7 after:w-4 after:h-4 after:rounded-full after:bg-transfarent   before:absolute before:top-0 before:-left-8 before:w-6 before:h-6 before:rounded-full before:border-2 before:border-solid before:border-black   after:peer-checked/pay1:bg-black' >Cash on delivery</label>
                </div>
            </Flex>
            <Flex className="justify-between my-8">
                <input className='border border-solid border-black/.4 py-4 w-284 pl-5 rounded' placeholder='Coupon Code'/>
                <Button text="Apply Coupon"/>
             </Flex> 
                <Button text="Place Order"/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Checkoutpage