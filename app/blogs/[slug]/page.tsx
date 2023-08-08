import { socialIcons } from '@/utils/socialIcons'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="pt-36 max-w-[1450px] mx-auto px-5 z-40 -mt-32">
        <div className="text-black max-w-4xl  font-medium z-50 font-sans">
          <h1>Published in World News</h1>
          <h1 className="text-3xl font-extrabold mt-4">
            Flowbite Blocks Tutorial - Learn how to get started with custom
            sections using the Flowbite Blocks
          </h1>
          <h3 className="text-gray-800 mt-4">
            Before going digital, you might scribbling down some ideas in a
            sketchbook.
          </h3>
        </div>
        <div className="max-w-[1450px] flex  mx-auto bg-white text-[#6b7280] dark:bg-[#1b2937] dark:text-gray-300 rounded p-10 mt-12">
          <div className=''>
            <div className="flex">
              <h1>
                By <b className="text-white"> Jese Leos</b> August 3, 2022,
                2:20am EDT
              </h1>
            </div>
            <div className='mt-10'>
              Flowbite is an open-source library of UI components built with the
              utility-first classes from Tailwind CSS. It also includes
              interactive elements such as dropdowns, modals, datepickers.
            </div>
            <div className='mt-10'>
              Flowbite is an open-source library of UI components built with the
              utility-first classes from Tailwind CSS. It also includes
              interactive elements such as dropdowns, modals, datepickers.
            </div>
            <div className='mt-10'>
              Flowbite is an open-source library of UI components built with the
              utility-first classes from Tailwind CSS. It also includes
              interactive elements such as dropdowns, modals, datepickers.
            </div>
           
          </div>
        </div>
      </div>
      <img
        className="w-full h-auto absolute top-0 left-0 right-0 z-[-40]"
        src="/images/blog.svg"
      />
    </>
  )
}

export default page
