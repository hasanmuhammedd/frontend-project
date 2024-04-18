import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'


const layout = () => {
  return (
    
    <div> 
      <Navbar/>
      <Outlet/>
    <Footer/>
    </div>
  )
}

export default layout