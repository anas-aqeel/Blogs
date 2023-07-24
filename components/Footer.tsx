import React from 'react'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { BiLogoLinkedin } from 'react-icons/bi'
import { AiFillGithub, AiOutlineGooglePlus } from 'react-icons/ai'

const Footer = () => {
  let socialIcons = [
    {
      link: '',
      Icon: AiOutlineGooglePlus,
    },
    {
      link: '',
      Icon: BsInstagram,
    },
    {
      link: '',
      Icon: BiLogoLinkedin,
    },
    {
      link: '',
      Icon: AiFillGithub,
    },
    {
      link: '',
      Icon: BsWhatsapp,
    },
  ]
  return (
    <div className="pt-7 mt-16">
      <footer className=" text-black text-center dark:text-white">
        <div className="mb-6 flex justify-center w-full">
          {socialIcons.map(({ Icon }) => (
            <a
              href="#!"
              type="button"
              className="flex justify-center items-center m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init=""
              data-te-ripple-color="light"
            >
              <Icon className="text-black dark:text-white" />{' '}
            </a>
          ))}
        </div>

        {/*Copyright section*/}
        <div
          className="p-4 text-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © Copyright 2023{' '}
          <a className="text-whitehite" href="https://tailwind-elements.com/">
            AnasAqeel
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
