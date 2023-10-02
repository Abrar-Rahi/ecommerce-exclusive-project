import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import {BsTelephone} from 'react-icons/bs'
import {BiEnvelope} from 'react-icons/bi'
import {FaStarOfLife} from 'react-icons/fa'
import Button from '../components/Button'

const Contact = () => {
  return (
    <section className='py-140'>
        <Container>
            <Flex className="gap-x-30">
               <div className='w-2/6'>
                 <div>
                 <Flex className="items-center gap-x-4">
                    <div className='w-10 h-10 bg-reed rounded-full flex items-center justify-center'>
                       <BsTelephone className='text-xl text-white'/>
                    </div>
                       <p className='font-pop font-medium text-base text-black'>Call To Us</p>
                 </Flex>
                 <p className='font-pop font-normal text-sm text-black mt-6 mb-4'>We are available 24/7, 7 days a week.</p>
                 <p className='font-pop font-normal text-sm text-black'>Phone: +8801611112222</p>
                 </div>
                 <div className='w-9/12 h-px bg-black my-8'></div>
                 <div>
                 <Flex className="items-center gap-x-4">
                    <div className='w-10 h-10 bg-reed rounded-full flex items-center justify-center'>
                       <BiEnvelope className='text-2xl text-white'/>
                    </div>
                       <p className='font-pop font-medium text-base text-black'>Write To US</p>
                 </Flex>
                 <p className='font-pop font-normal text-sm text-black mt-6 mb-4 w-250'>Fill out our form and we will contact you within 24 hours.</p>
                 <p className='font-pop font-normal text-sm text-black'>Emails: customer@exclusive.com</p>
                 <p className='font-pop font-normal text-sm text-black mt-4'>Emails: support@exclusive.com</p>
                 </div>
               </div>
               <div className='w-4/6'>
                 <Flex className="gap-x-4">
                    <div className='relative'>
                        {/* <FaStarOfLife className='text-reed text-6 absolute top-40% left-1/2'/> */}
                      <input placeholder='Your Name *' className='py-3 pl-4 bg-secondary rounded'/>
                    </div>
                    <div className='relative'>
                        {/* <FaStarOfLife className='text-reed text-6 absolute top-40% left-1/2'/> */}
                      <input placeholder='Your Email *' className='py-3 pl-4 bg-secondary rounded '/>
                    </div>
                    <div className='relative'>
                        {/* <FaStarOfLife className='text-reed text-6 absolute top-40% left-1/2'/> */}
                      <input placeholder='Your Phone *' className='py-3 pl-4 bg-secondary rounded'/>
                    </div>
                 </Flex>
                 <div >
                    <input placeholder='Your Massage' className='mt-8 pb-170 pl-4 bg-secondary rounded w-full h-206'/>
                    <Button text="Send Massage" className="flex  ml-auto mt-8"/>
                 </div>
               </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Contact