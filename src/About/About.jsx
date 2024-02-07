import React from 'react'
import Star from '../Components/Star/star'
export default function About() {
     let style={
          backgroundColor:'#1abc9c'
     }
  return (
     <div style={style} className='py-4' >
         <h1 className=' py-4 text-center '>ABOUT COMPONENT  </h1>
          <div className="text-center d-flex  justify-content-center align-items-center text-center">
          <Star color='#fff'/>
          </div>
          <div className=" container  py-5 text-center">
               
               <div className="row">
               
                    <div className="col-md-5 offset-1">
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </div>
                    <div className="col-md-5">
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </div>
               </div>
          </div>
    </div>
  )
}
