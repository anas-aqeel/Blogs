import { colors } from '@/utils/colors'
import React from 'react'

export type blogCard = {
  img: string
  author: string
  date: string
  title: string
  text: string
  tags: string[]
  isFeatured?: boolean
}
const BlogCardHorizontal = ({
  img,
  author,
  date,
  title,
  text,
  tags,
  isFeatured = false,
}: blogCard) => {
  return (
    <div className={`flex gap-6 ${isFeatured ? 'lg:flex-row flex-col' : 'flex-col sm:flex-row'} `}>
      <img
        src={img}
        className={`${
          isFeatured ? 'w-full lg:w-1/2' : 'w-full sm:w-[40%] lg:w-[55%]'
        } h-full object-center`}
      />
      <div
        className={` ${isFeatured ? 'w-full lg:w-1/2' : 'w-full  sm:w-[60%] lg:w-[45%]'}`}
      >
        <div className="">
          <div className="text-[#6941C6] font-semibold text-sm">
            {author} • {date}
          </div>
          <div className="flex w-full justify-between items-center mt-3">
            <h1 className="text-black dark:text-white text-lg font-semibold">
              {title}
            </h1>
          </div>
          <div className="text-[#667085] text-base font-normal mt-2">
            <p>{text}</p>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex gap-x-2 items-center justify-start">
            {tags.map((tag, i) => (
              <button
                key={i}
                className={`text-[${colors[i]}] text-sm rounded-full px-3 py-0.5 font-medium bg-[${colors[i]}] bg-opacity-5`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCardHorizontal
