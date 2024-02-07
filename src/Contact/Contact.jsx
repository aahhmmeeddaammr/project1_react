import React from 'react'
import Input from './Input'
import Star from '../Components/Star/star'

export default function Contact() {
  return (
    <div className='  overflow-hidden py-2 w-75 m-auto'>
      <h1 className='text-center'>CONATCT SECTION</h1>
      <Star color="rgb(44, 62, 80)" />
      <Input plsh='userName'/>
      <Input plsh='userAge'/>
      <Input plsh='userEmail'/>
      <Input plsh='userPassword'/>
      <button className='btn my-3' style={{background:'#1abc9c'}}>Submit</button>
    </div>
  )
}
