import Link from 'next/link'
import React from 'react'

import moment from "moment";

interface PostCardProps {
  title: string
  excerpt: string 
  authorName: string
  date: string
  authorSlug: string
  postSlug: string
}

const PostCard:React.FC<PostCardProps> = ({title, excerpt, authorName, date, authorSlug, postSlug}) => {
  return (
    <div className='w-[250px] md:w-[350px] xl:w-[450px] mx-auto px-5 gap-y-3 border-b-[1px] border-b-gray'>
      <Link 
        href={`/post/${postSlug}`}
        className='flex flex-col gap-y-4 transition-all duration-500 text-left ease-linear text-black dark:text-white hover:text-primary focus:outline-none focus:border-none'
      >
        <h2 className='text-lg md:text-2xl font-extrabold'>
          {title}
        </h2>
        <p className='font-thin text-base md:text-xl '>
          {excerpt}
        </p>
      </Link>
      <em className='font-thin text-lg md:text-xl font-serif text-gray'>
        Posted by{' '}
        <Link href={`/about/authors/${authorSlug}`} className='text-graydark font-serif focus:outline-none focus:border-none'>
          {authorName}
        </Link>{' '}
        {moment(date).format('[on] MMMM, DD, YYYY')}
      </em>
    </div>
  )
}

export default PostCard
