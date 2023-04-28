import React from 'react'

export default function Gallery() {
  return (
    <div id="gallery" className='max-w-full m-auto w-full h-full px-4 py-16'>
      <h2 className='text-center text-2xl text-sky-300 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
          <img className='w-full h-full object-cover' src="https://th.bing.com/th/id/R.1d4cd44a1af63bd8184e8ed0a8740978?rik=rsOUNEZhCd5ybQ&pid=ImgRaw&r=0" alt="" />
        </div>
        <div>
          <img className='w-full h-full object-cover' src="https://www.welt.de/img/reise/Fern/mobile133587395/6952508637-ci102l-w1024/One-Only-reethi-rah-maldives-2.jpg" alt="" />
        </div>
        <div>
          <img className='w-full h-full object-cover' src="https://i.pinimg.com/originals/0f/25/25/0f2525555e7844e2183890eb4e71fcfd.jpg" alt="" />
        </div>
        <div>
          <img className='w-full h-full object-cover' src="https://media-cdn.holidaycheck.com/w_1280,h_720,c_fit,q_80/ugc/images/455c0217-fdce-4c87-8b71-a36b5a36503c" alt="" />
        </div>
        <div>
          <img className='w-full h-full object-cover' src="https://eskipaper.com/images/thailand-pictures-3.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

