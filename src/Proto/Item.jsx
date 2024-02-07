import React from 'react'
export default function Item(props) {
  return (
    <>
      <div onClick={(e)=>{props.ch(e)}} key={123}  data-index={props.index}className=" Base col-md-4 position-relative overflow-hidden rounded-3">
          <img  data-index={props.index}  src={props.url} className=' w-100  ' alt="" />
          <div  data-index={props.index} className="layer d-flex justify-content-center rounded-3 align-items-center" style={{background:'#1abc9c'}}>
              <i data-index={props.index} className='text-white fa-solid fa-plus fa-6x'></i>
          </div>
      </div>
    </>
  )
}
