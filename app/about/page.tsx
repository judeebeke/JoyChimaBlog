import React, { ReactNode } from 'react'
import Image from 'next/image'
import { getAboutBlog } from '../../services'
import { RichText} from '@graphcms/rich-text-react-renderer'

import noPhoto from "../../public/assets/no-photo.jpg"

export const revalidate = 0

const About = async () => {
  const data = await getAboutBlog();


  if (!data) {
    // Handle the case where data is undefined (e.g., log an error, throw an exception, etc.)
    console.error("Page not is undefined");
    throw new Error('Page not found!');
  }

  return data.edges.map((item: AboutData) => {
    return (
      <>
        <div key={item.node.id} id='aboutHeroImage' className='text-white'>
          <div className='text-white flex flex-col h-[70vh] py-[30vh] gap-y-3 text-center'>
            <h1 className='text-4xl font-extrabold'>
              ABOUT <span className='text-primary'>JOY CHIMA BLOG</span>
            </h1>
            <p className='text-base font-medium'>{item.node.heading}</p>
          </div>
        </div>
        <section className='pt-10 px-10 md:px-20 w-full flex flex-col'>
        <RichText
          content={item.node.aboutContent.raw.children || []}
          renderers={{
            h1: ({ children }) => {
              return (
                <h1 className='mb-8'>
                  {children}
                </h1>
              );
            },
            h2: ({ children }) => {
              return (
                <h2 className='text-[1.3rem] font-semibold mb-4'>
                  {children}
                </h2>
              )
            },
            h3: ({ children }) => {
              return (
                <h3 className='text-xl font-semibold mb-4'>
                  {children}
                </h3>
              )
            },
            h4: ({ children }) => {
              return (
                <h4 className='text-md font-semibold mb-4'>
                  {children}
                </h4>
              )
            },
            h5: ({ children }) => {
              return (
                <h5 className='text-sm font-semibold mb-3'>
                  {children}
                </h5>
              )
            },
            h6: ({ children }) => {
              return (
                <h6 className='text-xs font-semibold mb-3'>
                  {children}
                </h6>
              )
            },
            img: ({ src, altText }) => {
              return (
                <Image
                  src={src || noPhoto}
                  alt={altText || "Blank or No Photo"}
                  width={500}
                  height={300}
                  priority
                  className='object-cover rounded-sm'
                />
              )
            },
            bold: ({ children }) => {
              return <strong> {children}</strong>
            },
            italic: ({ children }) => {
              return <em> {children}</em>
            },
            underline: ({ children }) => {
              return <u>{children}</u>
            },
            code: ({ children }) => {
              return (
                <code
                    className='bg-gray-100 mb-4 p-4 rounded overflow-x-auto'
                >
                  {children}
                </code>
              )
            },
            code_block: ({ children }) => {
              return (
                <pre
                    className='bg-gray-100 mb-4 p-4 rounded overflow-auto max-h-[500px]'
                >
                  {children}
                </pre>
              )
            },
            ul: ({ children }) => {
              return (
                <ul className='mb-8'>
                  {children}
                </ul>
              )
            },
            li: ({ children }) => {
              return (
                <li className='list-decimal mb-4 ms-4'>
                  {children}
                </li>
              )
            },
            p: ({ children }) => {
              return (
                <p className='mb-8'>
                  {children}
                </p>
              )
            },
            a: ({ href, children, openInNewTab }) => (
              <a
                href={href}
                target={openInNewTab ? '_blank' : '_self'}
                className='text-info hover:text-primary transition ease-in-out duration-500'
              >
                {children}
              </a>
            )
          }}
        />
        </section>
      </>
    )
  })
}

export default About
