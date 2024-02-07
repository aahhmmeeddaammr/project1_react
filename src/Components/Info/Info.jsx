import React from 'react'
import style from './Info.module.css';
export default function Info() {
  return (
    <div className='text-light ' style={{backgroundColor:'#2c3e50'}}>
          <div className="row gx-3 gy-2 d-flex justify-content-center py-5">
               <div className=" col-md-3 text-center">
                    <h2>LOCATION</h2>
                    <p>2215 John Daniel Drive</p>

                    <p>Clark, MO 65243</p>
               </div>
               <div className=" col-md-3 text-center">
                    <h2>AROUND THE WEB</h2>
                    <div className=" d-flex justify-content-center">
                         <div className={style.micon }><i class="fa-brands fa-facebook-f"></i></div>
                         <div className={style.micon }><i class="fa-brands  fa-twitter"></i></div>
                         <div className={style.micon }><i class="fa-brands  fa-linkedin"></i></div>
                         <div className={style.micon }><i class="fa-solid  fa-globe"></i></div>
                    </div>
               </div>
               <div className=" col-md-3 text-center text-light">
                    <h2>ABOUT FREELANCER</h2>

                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
               </div>
          </div>
    </div>
  )
}
