import React from 'react'
import {AiOutlineClockCircle} from "react-icons/ai"
import {BsChatSquareDots, BsFillTelephoneFill} from "react-icons/bs"
export default function TopBar() {
  return (
   <div className='flex w-full bg-slate-800 text-white z-10 h-14 justify-between items-center px-4 py-2'>
      <div className='flex items-center gap-2'>
       <BsChatSquareDots size={30}/>
       <h1>WEEKWAY</h1>
      </div>
      <div className='flex  items-center  '>
        <div className='hidden md:flex items-center px-6 gap-2'>
          <AiOutlineClockCircle />
         <p>9AM-5PM</p>
        </div>
       
        <div className=' hidden md:flex items-center px-6 gap-2'>  
          <BsFillTelephoneFill />
          <p>+49 55626 26262</p>
        </div>
        <button className=' flex border px-6 '>Get a Free Quote</button>
      </div>
   </div>
  )
}
