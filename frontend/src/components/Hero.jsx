import React from 'react'
import { assets } from '../assets/assests'

const Hero = () => {
  return (
    <div className='my-6 flex justify-center items-center '>
        <img src={assets.hero} alt="" className='w-[90%] h-120 object-cover' />
    </div>
  )
}

export default Hero