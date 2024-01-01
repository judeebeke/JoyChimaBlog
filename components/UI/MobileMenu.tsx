'use client'
import React, {useCallback, useEffect, useRef} from 'react'
import Link from 'next/link'
import { menuToggleCollapse } from '@/store'

import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const MobileMenu = () => {
  const navLinks = [{name: "Home", link: "/"}, {name: "About", link: "/about"}, {name: "Contact", link: "/contact"}, {name: "Posts", link: "/posts"}]

 const menuContext = menuToggleCollapse();
 const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null);
 const menuOpenRef = useRef<HTMLButtonElement | null>(null);

 const handleCloseMenu = useCallback(() => {
  document.getElementById('menuNav')?.classList.add('menu_fade_out');
  document.getElementById('menuOverlay')?.classList.add('animate_fade_out');

  setTimeout(() => {
    const currentMenuRef = menuOpenRef.current;

    if (currentMenuRef) {
      currentMenuRef.focus();
      menuContext.changeMenuHandler();
    }
  }, 900);
}, [menuContext]);

useEffect(() => {
  if (menuContext.menuIsActive && firstMenuItemRef.current) {
    firstMenuItemRef.current.focus();
  }

  const handleKeyCloseMenu = (event: { key: string }) => {
    // Check if the pressed key is 'Escape'
    if (event.key === 'Escape' && menuContext.menuIsActive) {
      handleCloseMenu()
    }
  };

  // Attach the event listener to the document
  document.addEventListener('keydown', handleKeyCloseMenu);

  // Clean up the event listener when the component unmounts
  return () => {
    document.removeEventListener('keydown', handleKeyCloseMenu);
  };
}, [handleCloseMenu, menuContext.menuIsActive]);

const handleKeyMenuNavigation = useCallback((event:{
  preventDefault(): unknown;
  key: string
}) => {
  const isArrowDown = event.key === 'ArrowDown';
  const isArrowRight = event.key === 'ArrowRight';
  const isArrowUp = event.key === 'ArrowUp';
  const isArrowLeft = event.key === 'ArrowLeft';
  const isEnterKey = event.key === 'Enter';


  if (isArrowDown || isArrowUp || isArrowRight || isArrowLeft) {
    event.preventDefault();


    const menuItems = document.querySelectorAll('.menu-item');
    const focusedElement = document.activeElement as Element;


    // Find the index of the currently focused element among menu items
    const currentIndex = Array.from(menuItems).indexOf(focusedElement);

    console.log(currentIndex, menuItems.length)
    // Calculate the index of the next menu item
    let nextIndex = 0;
    if (isArrowDown || isArrowRight) {
      nextIndex = (currentIndex + 1) % menuItems.length;      
      // if(currentIndex === (menuItems.length - 1)) {
      //   console.log(currentIndex, menuItems.length)
      //     nextIndex = 0
      //   } else {
      //   }
    } else if (isArrowUp || isArrowLeft) {
        nextIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
      // if(currentIndex === 0) {
      //   nextIndex = (menuItems.length - 1)
      // } else {
      // } 
    }

    // Focus on the next menu item
    const nextMenuItem = menuItems[nextIndex] as HTMLElement | null;
    if (nextMenuItem) {
      nextMenuItem.focus();
      if(isEnterKey) {
        handleCloseMenu()
      }
    }
  }
  
 
}, [handleCloseMenu]);

  return (
    <>
          <button
            onClick={menuContext.changeMenuHandler}
            aria-label='Navigation Menu Button'
            className='grid-cols-8 text-end font-bold text-white focus:text-info focus:outline-none focus:ring focus:border-blue-300 transition-all duration-400 ease-linear lg:hidden'
            ref={menuOpenRef}
          >
            <HiOutlineMenuAlt1 className="text-2xl text-white hover:text-info transition-all duration-400 ease-linear" />
          </button>
          {menuContext.menuIsActive && <div className="bg-graylight absolute top-0 left-0 w-[100vw] h-[100vh] z-[70] animate_fade_in lg:hidden" id="menuOverlay" onClick={handleCloseMenu}></div>}
          {menuContext.menuIsActive && <nav className={`fixed top-0 right-0 bg-graydark h-full w-[65vw] shadow-lg transition-all duration-300 ease-in-out menu_animate z-[75] lg:hidden`} aria-hidden={!menuContext.menuIsActive} aria-label='Navigation Menu' id="menuNav">
         
            <ul className='flex flex-col justify-center items-center text-center w-1/2 mx-auto mt-10 text-white dark:text-black gap-y-6 md:gap-y-8'
            onKeyDown={handleKeyMenuNavigation}
            >
              {navLinks.map((link, index) => {
                if(index === 0) {
                  return (
                    <li key={link.name} className='font-bold text-sm uppercase pb-2 w-full hover:color-info active:border active:border-info transition-all duration-500 ease-in-out'>
                    <Link
                      className='menu-item focus:border-b-2 focus:border-b-info focus:outline-none transition-all duration-500 ease-in-out pb-2'
                      href={link.link} id="navItem"
                      ref={firstMenuItemRef}
                      onClick={handleCloseMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                  )
                } else {
                  return (
                    <li key={link.name} className='font-bold text-sm uppercase pb-2 w-full hover:color-info active:border active:border-info transition-all duration-500 ease-in-out'>
                    <Link
                      className='menu-item focus:border-b-2 focus:border-b-info focus:outline-none transition-all duration-500 ease-in-out pb-2'
                      href={link.link} id="navItem"
                      onClick={handleCloseMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                  )
                }
              })}
              <button
          onClick={handleCloseMenu}
          aria-label='Navigation Close Menu Button'
          className='absolute top-7 left-4 font-bold text-white focus:text-info focus:outline-none focus:ring focus:border-blue-300 lg:hidden'
        >
          <AiOutlineClose className="text-2xl text-white hover:text-lg hover:text-info transition-all duration-400 ease-linear " />
        </button>
            </ul>
          </nav>}
    </>
  )
}

export default MobileMenu