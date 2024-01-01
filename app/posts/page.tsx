import PostCard from '@/components/PostCard'
import { getAllBlogPost } from '@/services'
import React from 'react'

export const revalidate = 1800

const PostsList = async () => {
  let skip = 0;
  const data = await getAllBlogPost(skip);
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6 mx-10 pt-20 lg:mt-5 pb-10 px-5 md:px-10">
     {data.edges.map((posts: PostDisplay) => {
            let post = posts.node;
            return (
    <div key={post.id} className='flex flex-col justify-center items-start w-full mx-auto gap-y-4 border-b-[1px] hover:border-l-[1px] border-b-gray hover:border-l-gray transition-all duration-500 ease-linear hover:shadow-lg focus:outline-none focus:border-none'>
    <PostCard  title={post.title} authorName={post.author.name} authorSlug={post.author.slug} date={post.createdAt} excerpt={post.excerpt} postSlug={post.slug} />
    </div>
            )
          })}
    </div>
    </>
  )
}

export default PostsList
