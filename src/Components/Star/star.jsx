import React, { useState } from 'react'

export default function Star(props) {
  let stylee={
    color: `${props.color}`,
    margin: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  }
  let style={
    width: '80px',
    height:' 5px',
    backgroundColor: `${props.color}`
  }
  return (
      <div style={stylee}>
        <div style={style}></div>
        <i class="fa-solid fa-star  fa-1x mx-5"></i>
        <div style={style}></div>
      </div>
  )
}
