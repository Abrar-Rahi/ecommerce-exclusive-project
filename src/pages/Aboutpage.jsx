import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Images from '../components/Images'
import about from "../assets/about.webp"
import abser from "../assets/abser.png"
import abser1 from "../assets/abser1.png"
import abser2 from "../assets/abser2.png"
import tom from "../assets/tom.png"
import emma from "../assets/emma.png"
import smith from "../assets/smith.png"

import MainHeading from '../components/MainHeading'
import Category from '../components/Category'
import {AiOutlineTwitter,AiOutlineInstagram,AiFillLinkedin} from 'react-icons/ai'
import services from '../assets/Services.png'
import services2 from '../assets/Services2.png'
import services3 from '../assets/Services3.png'
import Policy from '../components/Policy'

const Aboutpage = () => {
  return (
    <section className='pt-140'>
      <Container>
                           {/* story part start*/}
       <section>
       <Flex className="gap-x-75 items-center mb-140">
          <div className='w-1/2'>
              <MainHeading text="Our Story" className="text-54"/>
              <p className='font-pop font-normal text-base text-black mt-10 mb-6'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
              <p className='font-pop font-normal text-base text-black'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </div>
          <div className='w-1/2'>
            <Images src={about}/>
          </div>
        </Flex>
       </section>
                           {/* story part staendrt*/}


                           {/* Activites part start*/}
      <section>
       <Flex className="gap-x-30 mb-140">
          <Category className="w-270 h-230 group">
            <Images className="group-hover:bg-white"  src={abser}/>
            <h2 className='font-inter font-bold text-black text-32 group-hover:text-white'>10.5k </h2>
            <p className='font-pop font-normal text-black text-base group-hover:text-white'>Sallers active our site</p>
          </Category>

          <Category className="w-270 h-230 group">
            <Images  src={abser1}/>
            <h2 className='font-inter font-bold text-black text-32 group-hover:text-white'>33k </h2>
            <p className='font-pop font-normal text-black text-base group-hover:text-white'>Mopnthly Produduct Sale</p>
          </Category>

          <Category className="w-270 h-230 group">
            <Images  src={abser2}/>
            <h2 className='font-inter font-bold text-black text-32 group-hover:text-white'>45k </h2>
            <p className='font-pop font-normal text-black text-base group-hover:text-white'>Customer active in our site</p>
          </Category>

          <Category className="w-270 h-230 group">
            <Images  src={abser}/>
            <h2 className='font-inter font-bold text-black text-32 group-hover:text-white'>25k </h2>
            <p className='font-pop font-normal text-black text-base group-hover:text-white'>Anual gross sale in our site</p>
          </Category>
        </Flex>
      </section>                    
                           {/* Activites part end*/}



                          {/* CEO part start */}
       <section className='pb-140'>
       <Flex className="gap-x-30 ">
          <div>
              <Images src={tom}/>
              <h3 className='font-inter font-medium text-32 text-black mt-8'>Tom Cruise</h3>
              <p className='font-pop font-regular text-base text-black mt-2 mb-4'>Founder & Chairman</p>
              <Flex className="gap-x-4">
                  <AiOutlineTwitter className='text-black'/>
                  <AiOutlineInstagram className='text-black'/>
                  <AiFillLinkedin className='text-black'/>
              </Flex>
          </div>
          <div>
              <Images src={emma}/>
              <h3 className='font-inter font-medium text-32 text-black mt-8'>Emma Watson</h3>
              <p className='font-pop font-regular text-base text-black mt-2 mb-4'>Founder & Chairman</p>
              <Flex className="gap-x-4">
                  <AiOutlineTwitter className='text-black'/>
                  <AiOutlineInstagram className='text-black'/>
                  <AiFillLinkedin className='text-black'/>
              </Flex>
          </div>
          <div>
              <Images src={smith}/>
              <h3 className='font-inter font-medium text-32 text-black mt-8'>Will Smith</h3>
              <p className='font-pop font-regular text-base text-black mt-2 mb-4'>Founder & Chairman</p>
              <Flex className="gap-x-4">
                  <AiOutlineTwitter className='text-black'/>
                  <AiOutlineInstagram className='text-black'/>
                  <AiFillLinkedin className='text-black'/>
              </Flex>
          </div>
        </Flex>       
       </section>
                          {/* CEO part end */}


                           {/* information part start */}
  <section className='pb-140'>
   <Container>
     <Flex className="justify-around">
       <Policy src={services} text="FREE AND FAST DELIVERY" text2="Free delivery for all orders over $140"/>
       <Policy src={services2} text="24/7 CUSTOMER SERVICE" text2="Friendly 24/7 customer support"/>
       <Policy src={services3} text="MONEY BACK GUARANTEE" text2="We reurn money within 30 days"/>
    </Flex>  
  </Container>  
  </section>                
                            {/* information part end */}
      </Container>
    </section>
  )
}

export default Aboutpage