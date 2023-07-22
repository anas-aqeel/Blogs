import React from 'react'
import BlogCardVertical from '../components/BlogCardVertical'
import BlogCardHorizontal from '../components/BlogCardHorizontal'
const Header = () => {
  return (
    <div>
      <div className=" border-b border-t border-black border-opacity-30  font-bold text-[17.2vw] leading-snug text-center">
        THE BLOG{' '}
      </div>
      <div className="mt-7  px-8">
        <div className="text-black font-bold text-xl">Recent blog posts</div>
        <div className="mt-7 mb-32 grid grid-cols-2 gap-x-8">
          <BlogCardVertical />
          <div className="w-max flex flex-col gap-y-8">
            <BlogCardHorizontal />
            <BlogCardHorizontal />
          </div>
        </div>
        <BlogCardHorizontal />
      </div>
    </div>
  )
}

export default Header
