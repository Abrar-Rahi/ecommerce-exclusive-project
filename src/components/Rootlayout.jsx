import React from 'react'
import TopNav from './Layout/TopNav'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div>
        <TopNav/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Rootlayout