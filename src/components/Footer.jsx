import React from 'react'
import { BsChatSquareDots } from "react-icons/bs"

export default function Footer() {
  return (
    <div className='max-w-[1140px] m-auto w-full py-8 border-t-4'>
        <div className='flex items-center justify-center m-auto gap-2'>
        <BsChatSquareDots size={30} className='text-sky-400 ' />
        <h1 className='flex items-center text-2xl font-bold '>MAKE A AMZING TRAVEL </h1>
        </div>
        <p className='gride text-center justify-center text-sm py-4'>Rinor Tefiki 2023 </p>
    </div>
  )
}
