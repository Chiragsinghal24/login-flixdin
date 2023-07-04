import React from 'react'
import Reel from "../assets/reel.png";
import Tick from "../assets/tick.png"
const Thanks = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-[#f0eac7]'>
      <img src={Reel} className='absolute left-24 h-screen' alt="" />
      <div>
        <h1 className='text-[#978839] text-7xl font-semibold text-center'>Welcome <br />to</h1>
        <img src={Tick} className='mx-auto w-36 my-8' alt="" />
        <h1 className="text-9xl text-center  text-[#C6B34E] font-semibold">flixdin</h1>

      </div>
      <img src={Reel} className='absolute right-24 h-screen' alt="" />
    </div>
  )
}

export default Thanks
