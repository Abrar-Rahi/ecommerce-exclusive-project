import React from 'react'
import Images from './Images'
import Badge from './Badge'
import {MdFavoriteBorder} from "react-icons/md"
import {AiOutlineEye} from "react-icons/ai"
import {FaStar} from "react-icons/fa"
import PortionHeading from './PortionHeading'
import Flex from './Flex'
import { useDispatch } from 'react-redux'
import { addToCart } from '../slices/cartSlices'

const Products = ({src,text,text2,text3,badgeType,badgeText,}) => {

  let dispatch = useDispatch()

  let handleCart = ()=>{
    dispatch(addToCart(
      {
        name : text,
        quantity : 1,
        rate : text2,
        oldRate : text3,
        img : src,
      }
    ))
  }
  return (
    <div className='w-270'>
       <div className='group cursor-pointer'>
         <div className='relative bg-secondary h-250 rounded  overflow-hidden'>
            <Badge text={badgeText} type={badgeType}/>
            <div className='bg-white w-7 h-7 rounded-full absolute top-4 right-4 flex items-center justify-center'>
             <MdFavoriteBorder className='text-2xl text-black'/>
            </div>
            <div className='bg-white w-7 h-7 rounded-full absolute top-14 right-4 flex items-center justify-center'>
             <AiOutlineEye className='text-2xl text-black'/>
            </div>
            <div className='flex items-center justify-center mt-10'>
              <Images className="" src={src}/>
            </div>
            <button onClick={handleCart} className='py-2 bg-black w-full rounded-b font-pop font-medium text-base text-white absolute -bottom-10 left-0  group-hover:bottom-0 duration-300 '>Add To Cart</button>
        </div>
          <PortionHeading className="mt-4 mb-2" text={text}/>
       </div>
          <Flex className="gap-x-3 my-2 ">
            <PortionHeading text={text2} className="text-reed"/>
            <PortionHeading text={text3} className="relative after:absolute after:top-1/2 after:left-0 after:w-full after:h-px after:bg-black "/>
          </Flex>
          <Flex className="text-orng rounded gap-x-0.5 items-center">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <p className='font-pop font-medium text-base text-black ml-2'>(98)</p>
          </Flex>

    </div>
  )
}

export default Products