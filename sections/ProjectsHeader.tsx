import React from 'react'
import ProjectCard from '@/components/ProjectCard'

const ProjectsHeader = () => {
  return (
    <div>
      <div className=" border-b-[2px] border-t-[2px] border-black dark:border-white dark:border-opacity-100 border-opacity-30  font-bold text-[15vw] leading-snug text-center">
        PROJECTS{' '}
      </div>
      <div className="mt-7  px-8">
        <div className="text-black  dark:text-white font-bold text-xl">
          Live Projects
        </div>
        <div className="mt-7 mb-16 grid md:grid-cols-2 gap-8">
          <ProjectCard
            tags={['Design', 'Research', 'Presentation']}
            img="/images/project1.svg"
            author=""
            date=""
            title="User Experience Design Dashboard Hotel Management"
            text="n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard."
          />
          <ProjectCard
            tags={['Design', 'Research', 'Presentation']}
            img="/images/project2.svg"
            author=""
            date=""
            title="User Experience Design Dashboard Hotel Management"
            text="n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard."
          />
          <div className="md:col-span-2">
            <ProjectCard
              tags={['Design', 'Research', 'Presentation', 'Collaboration']}
              img="/images/project3.svg"
              author=""
              date=""
              title="UX review presentatiBringing Design Process to Teams, How to Solve User Problems with Data & Inclusive Collaboration Designons"
              text="There are many different design processes that can be followed when creating a hotel management dashboard. Here are some tips for bringing a design process to teams and using data and inclusive collaboration to solve user problems"
            />
          </div>
          <ProjectCard
            tags={['Design', 'Research', 'Presentation']}
            img="/images/project1.svg"
            author=""
            date=""
            title="User Experience Design Dashboard Hotel Management"
            text="n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard."
          />
          <ProjectCard
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
