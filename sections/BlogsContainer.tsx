import BlogCardVertical from '@/components/BlogCardVertical'
import React from 'react'

const BlogsContainer = () => {
  return (
    <div className="mt-16 pl-8">
      <div className="text-black  dark:text-white font-bold text-xl">
        All blog posts
      </div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-12 mt-8">
        {/* <BlogCardVertical />
        <BlogCardVertical />
        <BlogCardVertical />
        <BlogCardVertical />
        <BlogCardVertical /> */}
        <BlogCardVertical
            author="Olivia Rhye"
            date="1 Jan 2023"
            img="/images/blog2.svg"
            tags={['Design', 'Research', 'Presentation']}
            text="How do you create compelling presentations that wow your colleagues
            and impress your managers?"
            title="UX review presentations"
          />
        <BlogCardVertical
            author="Olivia Rhye"
            date="1 Jan 2023"
            img="/images/blog3.svg"
            tags={['Design', 'Research', 'Presentation']}
            text="How do you create compelling presentations that wow your colleagues
            and impress your managers?"
            title="UX review presentations"
          />
        <BlogCardVertical
            author="Olivia Rhye"
            date="1 Jan 2023"
            img="/images/blog2.svg"
            tags={['Design', 'Research', 'Presentation']}
            text="How do you create compelling presentations that wow your colleagues
            and impress your managers?"
            title="UX review presentations"
          />
        <BlogCardVertical
            author="Olivia Rhye"
            date="1 Jan 2023"
            img="/images/blog2.svg"
            tags={['Design', 'Research', 'Presentation']}
            text="How do you create compelling presentations that wow your colleagues
            and impress your managers?"
            title="UX review presentations"
          />
        <BlogCardVertical
            author="Olivia Rhye"
            date="1 Jan 2023"
            img="/images/blog3.svg"
            tags={['Design', 'Research', 'Presentation']}
            text="How do you create compelling presentations that wow your colleagues
            and impress your managers?"
            title="UX review presentations"
          />
        <BlogCardVertical
            author="Olivia Rhye"
            date="1 Jan 2023"
            img="/images/blog2.svg"
            tags={['Design', 'Research', 'Presentation']}
            text="How do you create compelling presentations that wow your colleagues
            and impress your managers?"
            title="UX review presentations"
          />
      </div>
    </div>
  )
}

export default BlogsContainer
