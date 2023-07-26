import React from 'react'
import { blogCard } from './BlogCardHorizontal'
import { colors } from '../utils/colors'

const ProjectCard = (blog: blogCard) => {
  return (
    <div>
      <img src={blog.img} className="w-full h-auto" />
      <div className="mt-8 space-y-3">
        <div className="flex w-full justify-between items-center gap-x-2">
          <h1 className="text-black  dark:text-white text-2xl font-semibold w-[98%]">
            {blog.title}
          </h1>
          <h1 className="whitespace-nowrap">--{'>'}</h1>
        </div>
        <div className="text-[#667085] text-base font-normal">
          <p>{blog.text}</p>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex gap-2 items-center justify-start flex-wrap">
          {blog.tags.map((tag, i) => (
            <button
              key={i}
              className={`text-[${colors[i]}] rounded-full px-3 py-0.5 font-medium bg-[${colors[i]}] bg-opacity-5 text-sm`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
