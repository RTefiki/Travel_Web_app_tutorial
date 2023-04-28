import React from 'react'

export default function div() {
  return (
    <div id="deals" className='  max-w-[1140px] m-auto w-full md:flex 
    lg:mt-[-7%] sm:mt-[-7%] mt-[-7%] items-center justify-center'>
      <div className='relative p-4'>
          <h1 className='absolute flex text-white top-[50%] left-[40%] text-4xl'>Resort</h1>
          <img src="https://miro.medium.com/max/3840/1*xMuIOwjliGUPjkzukeWKfw.jpeg" alt=""
            className=' border-2 border-white rounded-md'
          />
      </div>  
      <div className='relative p-6'>
          <h1 className='absolute flex text-white top-[50%] left-[40%] text-4xl'>Hotel</h1>
          <img src="https://ipropertymedia.com/wp-content/uploads/2017/09/VPJD-POOL-5398.jpg" alt=""
           className=' border-2 border-white rounded-md'
           />
      </div> 
      <div className='relative p-6'>
          <h1 className='absolute flex text-white top-[50%] left-[40%] text-4xl' >Resorts</h1>
          <img src="https://i.pinimg.com/originals/61/9e/61/619e61fe1835d556579685435afb76cb.jpg" alt="" 
          className=' border-2 border-white rounded-md'
          />
      </div> 
    </div>
  )
}
