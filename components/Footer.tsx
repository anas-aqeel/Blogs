import React from 'react'
import { socialIcons } from '../utils/socialIcons'

const Footer = () => {
  return (
    <div className=" mt-24">
      <footer className=" text-black text-center dark:text-white w-full dark:bg-transparent bg-opacity-05">
        {/*Copyright section*/}
        <div className="p-4 max-w-[1450px] mx-auto px-5 flex justify-between items-center sm:flex-row flex-col-reverse gap-y-3">
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2023-2024{' '}
            <a href="#" className="hover:underline">
              AnasAqeel
            </a> 
            . All Rights Reserved.
          </span>
          <div className="flex justify-center">
            {socialIcons.map(({ Icon }) => (
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
      </footer>
    </div>
  )
}

export default Footer
