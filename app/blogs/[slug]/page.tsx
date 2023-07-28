import { socialIcons } from '@/utils/socialIcons'
import React from 'react'

const page = () => {
  return (
    <div className="blog-post mt-14">
      {/* blog header */}
      <div>
        <div>
          <h1 className="max-w-3xl mx-auto text-center text-3xl sm:text-4xl md:text-5xl font-bold">
            A few words about this blog platform, Ghost, and how this site was
            made
          </h1>
          <h3 className="max-w-lg mx-auto text-xl text-center mt-8">
            Why Ghost (& Figma) instead of Medium, WordPress or other options?
          </h3>
          <img
            className="max-w-5xl w-full mx-auto h-auto mt-14"
            src="/images/blog2.svg"
          />
        </div>
        <div className=" max-w-2xl mx-auto px-5">
          <div className="my-8 h-0.5 w-full bg-[#878787]" />
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center">
              <div className="w-14 h-14 mr-4 rounded-full bg-gray-600"></div>
              <div>
                <h2 className="font-bold">Mika MAtikainen</h2>
                <h3 className="font-normal mt-2">Apr 15, 2020 · 4 min read</h3>
              </div>
            </div>
            <div className="flex justify-center">
              {[...socialIcons.slice(2, 4)].map(({ Icon }) => (
                <a
                  href="#!"
                  type="button"
                  className="flex justify-center items-center m-1 h-9 w-9 rounded-full  uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  <Icon className="text-black dark:text-white" />{' '}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* blog content */}
      <div className="blog-content mt-14 max-w-2xl mx-auto px-5">
        <p className="text-[#878787]  text-xl mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at
          viverra.
        </p>
        <p className="text-[#878787]  text-xl mb-14">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui
          molestie, molestie lectus eu, semper lectus.
        </p>
        <h2 className="  mb-10 text-3xl font-bold">
          Next on the pipeline
        </h2>
        <p className="text-[#878787]  text-xl mb-14">
          Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
          dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
          quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos.
        </p>
        <p className="text-[#878787] text-xl mb-14">
          Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam
          posuere maximus dui et fringilla.{' '}
        </p>
        <img src='/images/blog.svg' className='w-full h-auto mb-12'/>
        <p className="text-[#878787]  text-xl mb-14">
          Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
          dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
          quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos.
        </p>
        <p className="text-[#878787] text-xl mb-14">
          Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam
          posuere maximus dui et fringilla.{' '}
        </p>
      </div>
    </div>
  )
}

export default page
