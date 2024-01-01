"use client"

import React, { ChangeEvent, useState } from 'react'

const Contact: React.FC = () => {
  const [nameInput, setNameInput] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<boolean>(false);
  const [phoneInput, setPhoneInput] = useState<boolean>(false);
  const [messageInput, setMessageInput] = useState<boolean>(false);

  // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.target.value);
  // }

  return (
    <>
      <div id='contactHeroImage' className='text-white'>
        <div className='text-white flex flex-col h-[70vh] py-[30vh] gap-y-3 text-center'>
          <h1 className='text-4xl font-extrabold'>
            CONTACT <span className='text-primary'>JOY CHIMA</span>
          </h1>
          <p className='text-base font-medium'>
            Have questions? I have answers.
          </p>
        </div>
      </div>
      <section className='w-4/5 md:w-4/6 xl:w-1/2 pt-10 px-10 mx-auto md:px-20 flex flex-col justify-center items-center gap-y-8'>
        <h6 className='w-full text-graydark font-light text-2xl'>
          Want to get in touch? Fill out the form below to send me a message and
          I will get back to you as soon as possible!
        </h6>
        <form className='w-full' role="form">
          <div className='relative mb-4'>
            <input
              className='w-full px-3 py-2 border-b text-base border-b-gray outline-none focus:border-b-info transition-all duration-500 ease-linear mb-4'
              id='name'
              type='text'
              aria-label='Enter Name'
              // onChange={handleInputChange}
              onFocus={() =>{setNameInput(true)}}
              onBlur={()=>{setNameInput(false)}}
              required
              aria-required="true"
            />
            <label
             id='name-label'
              htmlFor='name'
              className={`w-full absolute left-0 top-0 px-3 py-2 pointer-events-auto ${nameInput ? "text-sm  text-graylight -translate-y-5" : "translate-y-0 text-gray text-base"} transition-all duration-300 ease-linear`}
            >
              Name
            </label>
            <div
              className='text-orange text-xs mt-1'
              data-sb-feedback='name:required'
              role="alert"
            >
              A name is required.
            </div>
          </div>
          <div className='relative mb-4'>
            <input
              className='w-full px-3 py-2 border-b border-b-gray outline-none focus:border-b-info transition-all duration-500 ease-linear mb-4'
              id='email'
              type='email'
              aria-label='Enter Email'
              onFocus={() =>{setEmailInput(true)}}
              onBlur={()=>{setEmailInput(false)}}
              required
              aria-required="true"
            />
            <label
              htmlFor='email'
              className={`w-full absolute left-0 top-0 px-3 py-2 pointer-events-auto ${emailInput ? "text-sm  text-graylight -translate-y-5" : "translate-y-0 text-gray text-base"} transition-all duration-300 ease-linear`}
            >
              Email Address
            </label>
            <div
              className='text-orange text-xs mt-1'
              data-sb-feedback='email:required'
              role="alert"
            >
              An email is required.
            </div>
            <div
              className='text-orange text-xs mt-1'
              data-sb-feedback='email:email'
              role="alert"
            >
              Email is not valid.
            </div>
          </div>

          <div className='relative mb-4'>
            <input
              className='w-full px-3 py-2 border-b border-b-gray outline-none focus:border-b-info transition-all duration-500 ease-linear mb-4'
              id='phone'
              type='tel'
              aria-label='Enter Phone Number'
              onFocus={() =>{setPhoneInput(true)}}
              onBlur={()=>{setPhoneInput(false)}}
              required
              aria-required="true"
            />
            <label
              htmlFor='phone'
              className={`w-full absolute left-0 top-0 px-3 py-2 pointer-events-auto ${phoneInput ? "text-sm  text-graylight -translate-y-5" : "translate-y-0 text-gray text-base"} transition-all duration-300 ease-linear`}
            >
              Phone Number
            </label>
            <div
              className='text-orange text-xs mt-1'
              data-sb-feedback='phone:required'
              role="alert"
            >
              A phone number is required.
            </div>
          </div>

          <div className='relative mb-4'>
            <textarea
              className='w-full px-3 py-2 border-b border-b-gray outline-none focus:border-b-info transition-all duration-500 ease-linear mb-4'
              id='message'
              aria-label='Enter Message'
              onFocus={() =>{setMessageInput(true)}}
              onBlur={()=>{setMessageInput(false)}}
              style={{ height: '12rem' }}
              required
              aria-required="true"
            ></textarea>
            <label
              htmlFor='message'
              className={`w-full absolute left-0 top-0 px-3 py-2 pointer-events-auto ${messageInput ? "text-sm  text-graylight -translate-y-5" : "translate-y-0 text-gray text-base"} transition-all duration-300 ease-linear`}
            >
              Message
            </label>
            <div
              className='text-orange text-xs mt-1'
              data-sb-feedback='message:required'
            >
              A message is required.
            </div>
          </div>

          {/* Submit success message */}
          <div className='hidden' id='submitSuccessMessage'>
            <div className='text-center mb-3'>
              <p className='font-bold' role="alert">Form submission successful!</p>
            </div>
          </div>

          {/* Submit error message */}
          <div className='hidden' id='submitErrorMessage'>
            <p className='text-center text-orange mb-3' role="alert">
              Error sending message!
            </p>
          </div>

          <button
            className={`w-1/5 py-4 px-4 bg-info text-white outline-none hover:opacity-75 cursor-pointer`}
            id='submitButton'
            type='submit'
            role='button'
            aria-label='Submit Form Button'
          >
            Send
          </button>
        </form>
      </section>
    </>
  )
}

export default Contact

// ${'isPending' && "cursor-progress"} ${'data' && "cursor-not-allowed"} ${'data' ||  && "cursor-not-allowed"}
