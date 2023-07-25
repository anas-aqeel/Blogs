import React from 'react'
import BlogCardVertical from '../components/CardVertical'
import BlogCardHorizontal from '../components/CardHorizontal'
import CardVertical from '../components/CardVertical'

const ProjectsHeader = () => {
  return (
    <div>
      <div className=" border-b-[2px] border-t-[2px] border-black dark:border-white dark:border-opacity-100 border-opacity-30  font-bold text-[16.5vw] leading-snug text-center">
        PROJECTS{' '}
      </div>
      <div className="mt-7  px-8">
        <div className="text-black  dark:text-white font-bold text-xl">
          Live Projects
        </div>
        <div className="mt-7 mb-16 grid md:grid-cols-2 gap-8">
          <CardVertical
            tags={['Design', 'Research', 'Presentation']}
            img="/images/project1.svg"
            author=""
            date=""
            title="User Experience Design Dashboard Hotel Management"
            text="n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard."
          />
          <CardVertical
            tags={['Design', 'Research', 'Presentation']}
            img="/images/project2.svg"
            author=""
            date=""
            title="User Experience Design Dashboard Hotel Management"
            text="n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard."
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectsHeader
