import React, { useState } from 'react'
import '../App.css'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Images from '../components/Images'
import banner from '../assets/banner.png'
import services from '../assets/Services.png'
import services2 from '../assets/Services2.png'
import services3 from '../assets/Services3.png'
import keybord from '../assets/keybord.png'
import monitor from '../assets/monitor.png'
import chair from '../assets/chair.png'
import catbanner from '../assets/catbanner.webp'
import List from '../components/List'
import Heading from '../components/Heading'
import Products from '../components/Products'
import Policy from '../components/Policy'
import Button from '../components/Button'
import {FaAngleRight} from 'react-icons/fa'
import {AiOutlineArrowUp} from 'react-icons/ai'
import {CiMobile4,CiHeadphones,CiCamera,CiDesktop} from 'react-icons/ci'
import {BsSmartwatch} from 'react-icons/bs'
import {LuGamepad} from 'react-icons/lu'
import {ImCross} from 'react-icons/im'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MainHeading from '../components/MainHeading'
import Category from '../components/Category'
import remote from '../assets/remote.png'
import featuremain from '../assets/featuremain.png'
import feature2nd from '../assets/feature2nd.png'
import feature3rd from '../assets/feature3rd.png'
import feature4th from '../assets/feature4th.png'
import RightArrBtn from '../components/RightArrBtn'
import LeftArrBtn from '../components/LeftArrBtn'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Homepage = () => {

  let cartData = useSelector(state => state.cartItem.value)

  let [cartView,setCartView] = useState(false)

  let handleUp = ()=>{
    window.scrollTo({
      top : 0,
      behavior : "smooth"
    })
  }

  let handleCart = ()=>{
    setCartView(true)
  }
  let handleCross = ()=>{
    setCartView(false)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    
  };

  return (
    <>
                 {/* banner part start */}

 <section className='pb-140'>
  <Container>
    <Flex className="gap-x-15 relative after:absolute after:top-0 after:left-233 after:w-px after:h-full after:bg-bdrclr pt-10">
      <div className='w-1/4 flex flex-col gap-y-4'>
        <div className='flex items-center justify-between w-3/4'>
          <List className="hover:after:h-0" text="Woman’s Fashion"/><FaAngleRight/>
        </div>
        <div className='flex items-center justify-between w-3/4'>
          <List className="hover:after:h-0" text="man’s Fashion"/><FaAngleRight/>
        </div>
        <List className="hover:after:h-0" text="Electronics"/>
        <List className="hover:after:h-0" text="Home & Lifestyle"/>
        <List className="hover:after:h-0" text="Sports & Outdoor"/>
        <List className="hover:after:h-0" text="Baby’s & Toys"/>
        <List className="hover:after:h-0" text="Groceries & Pets"/>
        <List className="hover:after:h-0" text="Health & Beauty"/>
        
        
      </div>
      <div className='w-3/4 relative'>
      <Slider {...settings}>
          <div>
          <Images src={banner}/>
          </div>
          <div>
          <Images src={banner}/>
          </div>
          <div>
          <Images src={banner}/>
          </div>
          <div>
          <Images src={banner}/>
          </div>
          <div>
          <Images src={banner}/>
          </div>
          <div>
          <Images src={banner}/>
          </div>
        </Slider>
        
      </div>
    </Flex>
  </Container>
 </section>

                 {/* banner part end */}


                 {/* todays part start */}
  <section className='pb-20'>
   <Container className="relative">
     <Heading text="Today’s"/>
     <Flex className="gap-x-87 mt-6 mb-10">
       <MainHeading text="Flash Sales"/>
       <div className='font-lora font-semibold text-4xl text-black'>COUNTDOWN TIMER(pore)</div>
     </Flex>
     <Flex className="gap-x-30">
      <Products badgeText="-40%" badgeType="redType" src={remote} text="HAVIT HV-G92 Gamepad" text2="$100" text3="$160"/>
      <Products badgeText="-35%" badgeType="redType" src={keybord} text="AK-900 Wired Keyboard" text2="$200" text3="$260"/>
      <Products badgeText="-30%" badgeType="redType" src={monitor} text="IPS LCD Gaming Monitor" text2="$300" text3="$360"/>
      <Products badgeText="-25%" badgeType="redType" src={chair} text="S-Series Comfort Chair " text2="$400" text3="$460"/>
     </Flex>
     <div className='flex justify-center mt-67 '><Button text="View All Products"/></div>
     <div className='w-full h-px bg-bdrclr mt-16'></div>
     <Flex className="gap-x-2 absolute top-16 right-0">
        <LeftArrBtn/>
        <RightArrBtn/>
     </Flex>
   </Container>  
  </section>               
                 {/* todays part end */}



                 {/* Categories part start */}
  <section className='pb-67'>
    <Container>
      <Heading text="Categories"/>
      <MainHeading className="mt-6 mb-10" text="Browse By Category"/>
      <Flex className="gap-x-30">
          <Category>
            <CiMobile4 className='text-5xl'/>
            <p className='font-pop font-normal  text-base'>Phones</p>
          </Category>

          <Category>
            <CiDesktop className='text-5xl'/>
            <p className='font-pop font-normal  text-base'>Computers</p>
          </Category>

          <Category>
            <BsSmartwatch className='text-5xl'/>
            <p className='font-pop font-normal  text-base'>SmartWatch</p>
          </Category>

          <Category>
            <CiCamera className='text-5xl'/>
            <p className='font-pop font-normal  text-base'>Camera</p>
          </Category>

          <Category>
            <CiHeadphones className='text-5xl'/>
            <p className='font-pop font-normal  text-base'>HeadPhones</p>
          </Category>

          <Category>
            <LuGamepad className='text-5xl'/>
            <p className='font-pop font-normal  text-base'>Gaming</p>
          </Category>
      </Flex>
      <div className='w-full h-px bg-bdrclr mt-16'></div>
    </Container>
  </section> 
                  {/* Categories part end */}



                  {/* ThisMonth part start */}
  <section className='pb-140'>
    <Container>
     <Heading text="This Month"/>
     <Flex className='mt-6 mb-10 justify-between'>
     <MainHeading text="Best Selling Products"/>
     <Button text="View All"/>
     </Flex>
     <Flex className="gap-x-30">
      <Products src={remote} text="HAVIT HV-G92 Gamepad" text2="$120" text3="$160"/>
      <Products src={remote} text="HAVIT HV-G92 Gamepad" text2="$120" text3="$160"/>
      <Products src={remote} text="HAVIT HV-G92 Gamepad" text2="$120" text3="$160"/>
      <Products src={remote} text="HAVIT HV-G92 Gamepad" text2="$120" text3="$160"/>
     </Flex>
    </Container>
  </section>                
                  {/* ThisMonth part end */}



                  {/* banner image part start */}
  <section className='pb-67'>
    <Container>
      <Images src={catbanner}/>
    </Container>
  </section>
                  {/* banner image part end */}



                  {/* product part start */}
  <section className='pb-140'>
   <Container>
    <Heading text="Our Products"/>
    <Flex className='mt-6 mb-10 justify-between'>
     <MainHeading text="Explore Our Products"/>
     <Flex className="gap-x-2">
        <LeftArrBtn/>
        <RightArrBtn/>
     </Flex>
     </Flex>
     <Flex className="gap-x-30 flex-wrap gap-y-16">
      <Products src={remote} text="HAVIT HV-G92 Gamepad" text2="$120"  />
      <Products src={remote} text="HAVIT HV-G92 Gamepad" text2="$120" />
      <Products src={remote} text="HAVIT HV-G92 Gamepad" text2="$120" />
      <Products src={remote} text="HAVIT HV-G92 Gamepad" text2="$120" />
      <Products badgeText="-New" badgeType="greenType" src={remote} text="HAVIT HV-G92 Gamepad" text2="$120" />
      <Products src={remote} text="HAVIT HV-G92 Gamepad" text2="$120"/>
      <Products badgeText="New" badgeType="greenType" src={remote} text="HAVIT HV-G92 Gamepad" text2="$120" />
      <Products src={remote} text="HAVIT HV-G92 Gamepad" text2="$120" />
     </Flex>
     <div className='flex justify-center mt-67 '><Button text="View All Products"/></div>
   </Container>  
  </section>                
                  {/* product part end */}



                  {/* featured part start */}
  <section className='pb-140'>
    <Container>
      <Heading text="Featured"/>
      <MainHeading className="mt-6 mb-10" text="New Arrival"/>
      <Flex className="gap-x-30">
        <div className='w-1/2'>
          <Images src={featuremain}/>
        </div>
        <div className='w-1/2'>
          <Flex className="flex-col gap-y-8">
            <div>
            <Images src={feature2nd}/>
            </div>
            <Flex className="gap-x-30">
            <Images src={feature3rd}/>
            <Images src={feature4th}/>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </Container>
  </section>                
                  {/* featured part end */}



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



                  {/* bottomToUpButton part start */}
  <Container className="relative">
    <button onClick={handleUp} className='absolute bottom-5 -right-20 flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-2xl text-black'><AiOutlineArrowUp/></button>
  </Container>
                  {/* bottomToUpButton part end */}
                  {/* AddToCart part start */}

      <Container  className="relative">
       
      <div className='fixed right-206 top-1/2 flex flex-col gap-y-0.5 justify-center items-center'>
        <AiOutlineShoppingCart onClick={handleCart} className='text-5xl text-red-700 '/>
         <p> {cartData.length}</p>
      </div>
      </Container> 
      {cartView && 
        <div className='w-206 h-screen bg-red-300 absolute right-0 top-96'>
          <ImCross onClick={handleCross} />
          
          {cartData.map(item =>(
            <ul>
              <li>name:{item.name}, price:{item.rate}, quantuty:{item.quantity}, oldrate:{item.oldRate}</li>
              <Images className="w-20 h-20" src={item.img}/>
            </ul>
          ))}
             <Link to="/cart">
              <Button text="Go Cart"/>
             </Link>
        </div>
        }                     
                  {/* AddToCart part end */}


    </>
  )
}

export default Homepage