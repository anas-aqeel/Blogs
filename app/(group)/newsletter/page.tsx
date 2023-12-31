import BlogsContainer from '@/sections/BlogsContainer'
import Newsletter from '@/sections/Newsletter'
import React from 'react'

const Page = () => {
  return (
    <>
      <Newsletter/>
    <div className='max-w-[1450px] mx-auto'>
      <BlogsContainer/>
    </div>
    </>
  )
}

export default Page