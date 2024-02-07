import React, { useState } from 'react'
import Item from './Item';
import Star from '../Components/Star/star';

export default function Protofolio() {
     let urls=[
          'https://routeegy.github.io/startFramework/assets/images/poert1.png',
          'https://routeegy.github.io/startFramework/assets/images/port2.png',
          'https://routeegy.github.io/startFramework/assets/images/port3.png',
          'https://routeegy.github.io/startFramework/assets/images/poert1.png',
          'https://routeegy.github.io/startFramework/assets/images/port2.png',
          'https://routeegy.github.io/startFramework/assets/images/port3.png'
     ]
     let [url,seturl]=useState('');
     let [dis,setdis]=useState('none');
     function tar(e){
          if(e.target.src){
               setdis('flex');
          }else{
               setdis('none');
          }
     }
     function ch(e){
          seturl(String(urls[+e.target.getAttribute('data-index')]));
          setdis('flex');
     }
  return (
     <div className="">
          <h1 className=' text-center pt-3'>PORTFOLIO COMPONENT</h1>
          <Star color="rgb(44, 62, 80)"/>
          <div className=' container my-4'>
               <div className="row gy-3">
                    { urls.map((val,index)=>{
                         return <Item ch={ch} index={index} url={val}/> ;
                    })}
               </div>
               
          </div>
          <div onClick={(e)=>{tar(e)}} className="blayer  justify-content-center align-items-center pt-auto   position-fixed"  style={{display:`${dis}`}}>
                    <img className='w-50' src={url} alt="" />
          </div>
     </div>
   
  )
}
