import React from 'react'
import Navebar from '../Components/Navebar/Navebar'
import { Outlet } from 'react-router-dom'
import Info from '../Components/Info/Info'
import Footer from '../Components/Footer/Footer'

export default function Layout() {
  return (
    <div>
       <Navebar/>
       <Outlet/>
       <Info/>
       <Footer/>
    </div>
  )
}
