import React, {useState} from 'react'
import {FaBars} from "react-icons/fa"
import {GrClose} from "react-icons/gr"
import { FaFacebookF, FaTwitter,FaGooglePlusG,FaInstagram} from "react-icons/fa"

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handeleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='flex min-h-[50px] w-full items-center absolute z-10 justify-between text-2xl'>
     <div className='flex w-full items-center justify-between gap-10'>
       <img className="flex w-14 h-14 max-w-[900px] text-white items-center justify-center rounded-full mx-4 mt-1 " src="https://th.bing.com/th/id/OIP.Gxe5uNXZIvkuiQEVfwQdGQHaHu?pid=ImgDet&rs=1" alt="" />
       <ul className='hidden sm:flex px-6 pl text-white gap-12'>
        <li className='text-2xl'>
          <a href="/">Home</a>
        </li>
        <li className='text-2xl'>
          <a href="#gallery">Gallery</a>
        </li>
        <li className='text-2xl'>
          <a href="#deals">Deals</a>
        </li>
        <li className='text-2xl'>
          <a href="#contact">Contact</a>
        </li>
       </ul>
       <div className='flex justify-center items-center xs:hidden w-full px-4 py-2 text-white'>
        <div className='hidden sm:flex '>
           <FaFacebookF className='mx-6  bg-blue-500 w-12 h-12  rounded-full border'/>
           <FaTwitter className='mx-6  bg-sky-400 w-12 h-12 rounded-full border' />
           <FaGooglePlusG className='mx-6 bg-gradient-to-r from-blue-800 to-green-400 bg- w-12 h-12 rounded-full border' />
           <FaInstagram  className='mx-6 bg-gradient-to-r from-yellow-100 to-red-600 w-12 h-12 rounded-full border' />
        </div>
       </div>
      </div>
      <div className='text-white'>
        <FaBars onClick={handeleNav} size={20} className='flex cursor-pointer sm:hidden mr-4 z-10'/>
        
      </div>
      
      <div onClick={handeleNav} className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute top-0 left-0 w-full h-screen bg-black text-white' : "absolute top-0 h-screen left-[-100%] duration-300 ease-in"}>
        
        <ul className='w-full flex-1 h-full text-center mt-14'>
          <div className='w-full flex items-center justify-end '>
        < GrClose  className=' mx-8 w-8 h-8 bg-white rounded-full cursor-pointer flex items-end justify-end text-md'/>
          </div>
        <li className='text-2xl py-8'>
          <a href="/">Home</a>
        </li>
        <li className='text-2xl py-8'>
          <a href="#gallery">Gallery</a>
        </li>
        <li className='text-2xl py-8'>
          <a href="#deals">Deals</a>
        </li>
        <li className='text-2xl py-8'>
          <a href="#contact">Contact</a>
        </li>
        
        <div className='flex mt-8 items-center justify-center'>
        <FaFacebookF className='mx-6  bg-blue-500 w-12 h-12  rounded-full border'/>
           <FaTwitter className='mx-6  bg-sky-400 w-12 h-12 rounded-full border' />
           <FaGooglePlusG className='mx-6 bg-gradient-to-r from-blue-800 to-green-400 bg- w-12 h-12 rounded-full border' />
           <FaInstagram  className='mx-6 bg-gradient-to-r from-yellow-100 to-red-600 w-12 h-12 rounded-full border' />
        </div>
        </ul>
      </div>
    </div>
  )
}
