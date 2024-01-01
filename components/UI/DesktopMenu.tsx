"use client"
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import { usePathname } from 'next/navigation'

const DesktopMenu = () => {
  const navLinks = [{name: "Home", link: "/"}, {name: "About", link: "/about"}, {name: "Contact", link: "/contact"}, {name: "Posts", link: "/posts"}]
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState('/')

  const handleKeyDown = (event: {
    preventDefault(): unknown;
    key: string
}) => {
    const isArrowDown = event.key === 'ArrowDown';
    const isArrowRight = event.key === 'ArrowRight';
    const isArrowUp = event.key === 'ArrowUp';
    const isArrowLeft = event.key === 'ArrowLeft';

    if (isArrowDown || isArrowUp || isArrowLeft || isArrowRight) {
      event.preventDefault();

      const menuItems = document.querySelectorAll('.menus-item');
      const focusedElement = document.activeElement as Element;

      // Find the index of the currently focused element among menu items
      const currentIndex = Array.from(menuItems).indexOf(focusedElement);

      // Calculate the index of the next menu item
      let nextIndex = 0;
      if (isArrowDown || isArrowRight) {
        nextIndex = (currentIndex + 1) % menuItems.length;
        if(currentIndex === (menuItems.length - 1)) {
          nextIndex = 0
        }
      } else if (isArrowUp || isArrowLeft) {
        nextIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
        if(currentIndex === 0) {
          nextIndex = (menuItems.length - 1)
        }
      }

      // Focus on the next menu item
      const nextMenuItem = menuItems[nextIndex] as HTMLElement | null;
      if (nextMenuItem) {
        nextMenuItem.focus();
      }
    }
  };

  useEffect(() => {
    let newPath = pathname;
    console.log(newPath)
    setCurrentPath(newPath)
  }, [pathname]);

  return (
    <>
     <nav aria-label='Navigation Menu' className="hidden lg:flex">
          <ul className='grid-cols-8 md:flex flex-col md:flex-row justify-end items-center text-white dark:text-black gap-x-6 md:gap-x-8 hidden lg:flex'
          onKeyDown={handleKeyDown}
          >
            {navLinks.map((link, index) => {
               
                  return (
                    <li key={link.name} className={`font-bold text-sm uppercase pb-2 w-full hover:text-info active:border active:border-info transition-all duration-500 ease-in-out ${currentPath === link.link && "text-info"}`}>
                    <Link
                      className={`menus-item focus:border-b-2 focus:border-b-info focus:outline-none transition-all duration-500 ease-in-out pb-2`}
                      href={link.link} id="navItem"
                    >
                      {link.name}
                    </Link>
                  </li>
                  )
                })
              }
          </ul>
        </nav>
    </>
  )
}

export default DesktopMenu
