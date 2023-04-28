import React from 'react'

import 'react-datepicker/dist/react-datepicker.css'


function Booking(){

   
 
  return (
    <div className='max-w-[1400px] m-auto w-full p-4'>
      <form className='lg:flex lg:justify-between w-full items-center '>
          <div className='flex flex-col my-2 px-2 py-2 mt-1'>
             <label className='px-3'>Destination</label>
             <select className='lg:w-[300px] md:w-full border rounded-md p-2 cursor-pointer'>
                    <option>Grande Antiqua</option>
                    <option>Key West</option>
                    <option>Maldives</option>
                    <option>Durs</option>
             </select>
          </div>
          <div className='flex w-full '>
          <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2 mt-1 '>
                <label className='px-2'>Check-in</label>
                <input className='border  rounded-md p-2 cursor-pointer' 
                type='date'
                name="date"
                placeholder='mm-dd-yyyy'
                />
             </div>
             <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2 mt-1 '>
                <label className='px-2'>Check-Out</label>
                <input className='border  rounded-md p-2 cursor-pointer' 
                type='date'
                name="date"
                placeholder='mm-dd-yyyy'
                />
             </div>
             
          </div>
          <div className='flex flex-col my-2 p-2 w-full mt-1'>
                <label className=' flex text-bold px-2 items-center justify-center'>Search</label>
                <button>Rates & Availibities</button>
          </div>
       </form>
    </div>
  )
 }



export default Booking;