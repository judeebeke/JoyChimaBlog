'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'

type Props = {
  btnString: string
  extraStyles: string
  btnRoute: string
  btnIcon?: ReactNode
}

const Button = (props: Props) => {
  const router = useRouter()

  return (
    <button
      className={`w-auto max-w-[10rem] h-auto p-4 text-white dark:text-black dark:bg-graylight ${props.extraStyles} focus:border-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-500 ease-in-out`}
      role='button'
      aria-label={props.btnString}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          router.push(props.btnRoute)
        }
      }}
    >
      <Link
        href={props.btnRoute}
        tabIndex={-1}
        className='flex justify-between items-center gap-5 w-full max-w-full'
      >
        {props.btnString}
        {props.btnIcon}
      </Link>
    </button>
  )
}

export default Button
