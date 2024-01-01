import PostCard from '@/components/PostCard'
import Button from '@/components/UI/Button'
import { getRecentBlogPost } from '@/services';
import { FaAngleRight } from "react-icons/fa6";

export const revalidate = 1800

export default async function Home () {
  const data = await getRecentBlogPost()
  return (
    <>
      <div id='heroImage' className='text-white'>
        <div className='flex flex-col h-[70vh] py-[30vh] gap-y-3 text-center text-white'>
          <h1 className='text-4xl font-extrabold'>
            WELCOME TO <span className='text-primary'>JOY CHIMA BLOG</span>
          </h1>
          <p className='text-base font-medium'>
            The most informative Blog on the Internet
          </p>
          <Button
            key={'hero'}
            btnRoute='/posts'
            btnString='Get Started'
            extraStyles='mt-3 bg-graydark text-white rounded-xl transition-all duration-300 ease-in-out hover:bg-black hover:translate-y-2 mx-auto'
          />
        </div>
      </div>
      <main className='px-10 md:px-20 w-full'>
        <section className='mt-10 flex flex-col justify-center items-center w-full space-y-4'>
          {data.edges.map((posts: PostDisplay) => {
            let post = posts.node;

            return (
              <PostCard key={post.id} title={post.title} authorName={post.author.name} authorSlug={post.author.slug} date={post.createdAt} excerpt={post.excerpt} postSlug={post.slug} />
            )
          })}
          <div className='w-4/5 md:w-4/6 xl:w-1/2 flex place-content-end justify-end'>
            <Button
              btnRoute='/posts'
              btnString='Read More'
              btnIcon={<FaAngleRight />}
              extraStyles='mt-2 py-2 bg-graydark text-white hover:bg-black transition-all duration-300 ease-in-out'
            />
          </div>
        </section>
      </main>
    </>
  )
}
