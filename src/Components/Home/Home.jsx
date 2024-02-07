import React from 'react'
import Star from '../Star/star'

export default function Home() {
     let back={
          backgroundColor:'#1abc9c'
     }
     let stylee={
          fontSize:'30px',
          fontWeight: '700',
          color:'#fff'
     }
  return (
    <>
    <div style={back} className="d-flex justify-content-center align-items-center py-5 text-center">
          <div className="my-5">
               <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" className='w-100' alt="" />
               <Star color='#fff'/>
               <p className='my-3' style={stylee}>START FRAMEWORK</p>
               <p className=' text-light'>Graphic Artist - Web Designer - Illustrator</p>
          </div>
    </div>
    </>
  )
}
