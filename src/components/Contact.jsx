import React from 'react'

export default function Contact() {
  return (
    <div id="contact" className='max-w-full m-auto w-full p-4 py-16'>
        <h1 className='text-center text-cyan-600 text-2xl'>Send us a message</h1>
        <p className='text-center text-cyan-600 text-xl py-2'>We'r staying by!</p>
        <div className='grid md:grid-cols-2 py-2'>
                <img 
                className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px] border-2 shadow-2xl shadow-sky-400'
                src="https://i.ytimg.com/vi/xI3ul4r1TvU/maxresdefault.jpg" alt="" />
                <form>
                        <div className='grid grid-cols-2'>
                           <input className='border m-2 p-2 rounded-md' type="text" placeholder='Frist' />
                           <input className='border m-2 p-2 rounded-md' type="text" placeholder='Last' />
                           <input className='border m-2 p-2 rounded-md' type="email" placeholder='Email' />
                           <input className='border m-2 p-2 rounded-md' type="tel" placeholder='Phone' />
                           <input className='border col-span-2 p-2 m-2 rounded-md' type="text" placeholder='Adresse'  />      
                           <textarea className='border col-span-2 p-2 m-2 rounded-md' cols="20" rows="10"></textarea>
                           <button className='border col-span-2 p-2 m-2 rounded-md'>Submit</button>
                        </div>
                </form>
        
        </div>
    </div>
  )
}
