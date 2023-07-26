import React from 'react'
import BlogCardVertical from '../components/BlogCardVertical'
import BlogCardHorizontal from '../components/BlogCardHorizontal'

const Header = () => {
  return (
    <div>
      <div className=" border-b-[2px] border-t-[2px] border-black dark:border-white dark:border-opacity-100 border-opacity-30  font-bold text-[15.9vw] leading-snug text-center">
        THE BLOG{' '}
      </div>
      <div className="mt-7  px-8">
        <div className="text-black  dark:text-white font-bold text-xl">
          Recent blog posts
        </div>
        <div className="mt-7 mb-16 grid lg:grid-cols-2 gap-8">
          <BlogCardVertical
            author="Olivia Rhye"
            date="1 Jan 2023"
            img="/images/blog.svg"
            tags={['Design', 'Research', 'Presentation']}
            text="How do you create compelling presentations that wow your colleagues
            and impress your managers?"
            title="UX review presentations"
          />
          <div className="flex flex-col gap-y-8">
            <BlogCardHorizontal
              img="/images/blog2.svg"
              author="Phoenix Baker"
              date="Jan 2023"
              title="Migrating to Linear 101"
              text="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..."
              tags={['Design', 'Research']}
            />
            <BlogCardHorizontal
              img="/images/blog3.svg"
              author="Lana Steiner"
              date="Jan 2023"
              title="Building your API Stack"
              text="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
              tags={['Design', 'Research']}
            />
          </div>
        </div>
        <BlogCardHorizontal
          img="/images/blog.svg"
          author="Olivia Rhye"
          date="Jan 2023"
          title="Grid system for better Design User Interface"
          text="A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate."
          tags={['Design', 'Interface']}
          isFeatured={true}
        />
      </div>
    </div>
  )
}

export default Header
