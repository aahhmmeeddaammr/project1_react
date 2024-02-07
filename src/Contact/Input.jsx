import React from 'react'

export default function Input(props) {
  return (
    <>
     <div className="form-floating mb-3">
          <input type="email" className="form-control border-0 shadow-none border-bottom my-3"  placeholder={props.plsh} id="floatingInput"  />
          <label style={{color:'#1abc9c',fontSize:'20px'}} htmlFor="floatingInput">{props.plsh}:</label>
     </div>

    </>
  )
}
