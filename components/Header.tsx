
import React, { ReactNode } from 'react'
import Link from 'next/link'
import DesktopMenu from './UI/DesktopMenu'
import MobileMenu from './UI/MobileMenu'

export const Header = () => {

  return (
    <header className='w-full h-auto lg:h-24 grid grid-flow-col items-center justify-between py-5 bg-gray dark:bg-graydark fixed top-0 left-0 right-0 z-[50] px-10 md:px-20'>
      <div className='grid-cols-4'>
        <Link
          href='/'
          className='font-extrabold text-xl text-white outline-none focus:border-b-2 focus:border-b-info  transition-all duration-500 ease-in-out pb-2 text-center'
        >
          JOY CHIMA
        </Link>
      </div>
        <MobileMenu />
        <DesktopMenu />
    </header>
  )
}
