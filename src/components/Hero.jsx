import React from 'react'

export default function Hero() {
  return (
    <div id="home" className='w-full h-[90vh]'>
       <img 
       className='w-full h-full object-cover'
       src="https://www.urlaubsguru.at/wp-content/uploads/2019/03/Foto-Shangri-La-Malediven-80r022h.jpg" alt="" />
       <div className="max-w-full m-auto">
        <div className='absolute top-[40%] w-full px-8 md:-[50%] max-w-[600px]'>
          <h1 className='text-4xl font-bold text-black'>Find Your Special Trip</h1>
          <h1 className='text-4xl font-bold text-black'>Whith Weekaway</h1>
          <p className='text-lg font-bold italic text-sky-200 '>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            <br />
            Dicta iure nam natus distinctio fugit,
            <br /> 
            eum libero suscipit tenetur explicabo pariatur praesentium officiis totam, 
            iusto nobis molestias,<br />
            vitae veritatis ipsum sit?
          </p>
        </div>
       </div>  
    </div>
  )
}
