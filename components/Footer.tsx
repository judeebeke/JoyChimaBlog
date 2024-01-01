import Link from 'next/link'
import React from 'react'

import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center gap-y-7 py-10 w-[100vw] border-t-[1px] border-gray mt-7'>
      <div className='flex justify-center items-center gap-x-5'>
        <Link href='post/slug' className ="flex justify-center items-center rounded-[100%] w-16 h-16 px-4 text-center bg-black hover:bg-gray transition-all duration-500 ease-in-out">
          <FaFacebookF className='text-white text-2xl font-bold' />
        </Link>
        <Link href='post/slug' className=" flex justify-center items-center rounded-[100%] w-16 h-16 px-4 text-center bg-black hover:bg-gray transition-all duration-500 ease-in-out">
          <FaXTwitter className='text-white text-2xl font-bold' />
        </Link>
        <Link href='post/slug' className=" flex justify-center items-center rounded-[100%] w-16 h-16 px-4 text-center bg-black hover:bg-gray transition-all duration-500 ease-in-out">
          <FaWhatsapp className='text-white text-2xl font-bold' />
        </Link>
      </div>
      <p className="font-serif text-graydark">
        Copyright © <Link href='/' className=" transition-all text-gray ease-linear duration-300 hover:text-primary font-serif">Joy Chima Blog</Link> 1623
      </p>
    </footer>
  )
}

export default Footer
