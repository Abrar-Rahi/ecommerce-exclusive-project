import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { useSelector } from 'react-redux'
import Images from '../components/Images'
import {FaAngleDown,FaAngleUp} from 'react-icons/fa'
import Button from '../components/Button'
import PortionHeading from '../components/PortionHeading'

const Cartpage = () => {
    let cartData = useSelector(state => state.cartItem.value)
  return (
    <>
                   {/* cart list section */}
    <section className='py-140'>
        <Container>
           <Flex className="flex-col gap-y-16">
           <Flex className="flex-row font-pop font-bold text-base text-black">
                <div className='basis-6/12 '>Product</div>
                <div className='w-2/12 '>Price</div>
                <div className='w-2/12 '>Quantity</div>
                <div className='w-2/12 '>Subtotal</div>
            </Flex>
            {cartData.map(item =>(
                <>
            <Flex className=" flex-row justify-between items-center pl-2 font-pop font-normal text-base text-black bg-cartBG py-3">
            
                <div className='basis-6/12 flex items-center gap-x-5'>
                <Images className="w-10 h-10" src={item.img}/>
                {item.name.split(" ")[0] + " " + item.name.split(" ")[item.name.split(" ").length-1]}
                </div>
                <div className='basis-2/12 '>{item.rate}</div>
                <div className='basis-2/12  '>
                 <div className='w-1/3 justify-center rounded flex items-center gap-x-1 border border-solid border-black/.4'>
                    {item.quantity}
                    <div>
                      <FaAngleUp />
                      <FaAngleDown/>
                    </div>
                 </div>
                </div>
                <div className='basis-2/12 '>{item.rate.replace("$","") * item.quantity}$</div>
            </Flex>
            </>
          ))}
           </Flex>
           <Flex className="justify-between mt-12">
            <Button className=" " text="Return To Shop" type="transparent"/>
            <Button text="Update Cart" type="transparent"/>
           </Flex>
        </Container>
    </section>
                  {/* subtotal section */}
    <section className='pt-20 pb-140'>
       <Container>
        <Flex className="justify-between">
             <div className='w-1/2'>
             <Flex className="gap-x-4 ">
                <input className='border border-solid border-black/.4 py-4 pl-5 w-300 rounded' placeholder='Coupon Code'/>
                <Button text="Apply Coupon"/>
             </Flex>
             </div>
             
             <div className='w-470 border border-black/.4 border-solid flex flex-col gap-y-3 py-8 px-6'>
                <PortionHeading className="text-xl" text="Cart Total"/>
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
                <Button text="Procees to checkout" className="mx-auto"/>
             </div>
        </Flex>
       </Container>
    </section>
    </>

    
  )
}

export default Cartpage