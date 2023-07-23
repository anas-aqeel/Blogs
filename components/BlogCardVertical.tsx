import React from 'react'

const BlogCardVertical = () => {
  return (
    <div>
      <img src="/images/blog.svg" className="w-full h-auto" />
      <div className="mt-8 space-y-3">
        <div className="text-[#6941C6] font-semibold text-sm">
          Olivia Rhye • 1 Jan 2023
        </div>
        <div className="flex w-full justify-between items-center">
          <h1 className="text-black  dark:text-white text-2xl font-semibold">
            UX review presentations
          </h1>
          <h1>--{'>'}</h1>
        </div>
        <div className="text-[#667085] text-base font-normal">
          <p>
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex gap-x-2 items-center justify-start">
          <button className="text-[#6941C6] rounded-full px-3 py-0.5 font-medium bg-[#6941C6] bg-opacity-5">
            Design
          </button>
          <button className="text-[#3538CD] rounded-full px-3 py-0.5 font-medium bg-[#3538CD] bg-opacity-5">
            Research
          </button>
          <button className="text-[#C11574] rounded-full px-3 py-0.5 font-medium bg-[#C11574] bg-opacity-5">
            Presentation
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogCardVertical
