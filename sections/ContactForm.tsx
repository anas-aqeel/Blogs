import { socialIcons } from '@/utils/socialIcons'
import React from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { MdEmail, MdLocationOn } from 'react-icons/md'
const ContactForm = () => {
  return (
    <div className="max-w-7xl mx-auto mt-[50px] rounded-lg shadow-xl p-2.5 flex bg-[#fefefe] dark:bg-opacity-5 dark:border-opacity-20  dark:border dark:border-white">
      <div className="w-[40%] rounded-lg bg-black  p-10 relative ">
        <img
          src="/images/contact.svg"
          className="w-[200px] h-auto absolute bottom-0 right-0 rounded-br-lg"
        />
        <div>
          <h3 className="text-2xl font-semibold text-white ">
            Contact Information
          </h3>
          <p className="text-lg text-[#C9C9C9]">
            Say something to start a live chat!
          </p>
        </div>
        <div className="flex flex-col w-full mt-28 gap-y-10  text-white">
          <div className="flex gap-x-6 items-center w-full justify-start ">
            <BiSolidPhoneCall className="w-6 h-auto" />
            <p>+92 334223 3619</p>
          </div>
          <div className="flex gap-x-6 items-center w-full justify-start ">
            <MdEmail className="w-6 h-auto" />
            <p>anasaqeel.4444@gmail.com</p>
          </div>
          <div className="flex gap-x-6 items-center w-full justify-start ">
            <MdLocationOn className="w-6 h-auto" />
            <p>
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </p>
          </div>
        </div>
        <div className="flex justify-start mt-40">
          {socialIcons.map(({ Icon }) => (
            <a
              href="#!"
              type="button"
              className="flex justify-center items-center m-1 h-9 w-9 rounded-full  uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init=""
              data-te-ripple-color="light"
            >
              <Icon className="text-white " />{' '}
            </a>
          ))}
        </div>
      </div>
      <div className="px-12 py-14 text-black  w-[60%] flex flex-col gap-y-11 relative">
        <img src="/images/contact-bg-arrow.svg" alt="" className='absolute bottom-0 right-0 z-0' />
        <div className="flex gap-x-10 ">
          <div className="group flex flex-col w-full">
            <label className="font-medium group-hover:text-black dark:group-hover:text-white text-[#8D8D8D]">
              First Name
            </label>
            <input
              placeholder="John"
              type="text"
              className="text-[#000] dark:text-white outline-none border-b-2 py-2.5 px-1.5 border-[#8D8D8D] group-hover:border-black dark:group-hover:border-white bg-transparent"
            />
          </div>
          <div className="group flex flex-col w-full">
            <label className="font-medium group-hover:text-black dark:group-hover:text-white text-[#8D8D8D]">
              Last Name
            </label>
            <input
              placeholder="Doe"
              type="text"
              className="text-[#000] dark:text-white outline-none border-b-2 py-2.5 px-1.5 border-[#8D8D8D] group-hover:border-black dark:group-hover:border-white bg-transparent"
            />
          </div>
        </div>
        <div className="flex gap-x-10 ">
          <div className="group flex flex-col w-full">
            <label className="font-medium group-hover:text-black dark:group-hover:text-white text-[#8D8D8D]">
              First Name
            </label>
            <input
              placeholder="example@gmail.com"
              type="email"
              className="text-[#000] dark:text-white outline-none border-b-2 py-2.5 px-1.5 border-[#8D8D8D] group-hover:border-black dark:group-hover:border-white bg-transparent"
            />
          </div>
          <div className="group flex flex-col w-full">
            <label className="font-medium group-hover:text-black dark:group-hover:text-white text-[#8D8D8D]">
              Phone Number
            </label>
            <input
              placeholder="+123 456789 123"
              type="text"
              className="text-[#000] dark:text-white outline-none border-b-2 py-2.5 px-1.5 border-[#8D8D8D] group-hover:border-black dark:group-hover:border-white bg-transparent"
            />
          </div>
        </div>
        <div className="flex gap-x-10 ">
          <div className="group flex flex-col w-full">
            <label className="font-medium group-hover:text-black dark:group-hover:text-white text-[#8D8D8D]">
              Message
            </label>
            <textarea
              placeholder="Write your message.."
              rows={3}
              className="mt-1.5 text-[#000] dark:text-white outline-none border-b-2 py-2.5  border-[#8D8D8D] group-hover:border-black dark:group-hover:border-white bg-transparent"
            />
          </div>
        </div>
        <div className="w-full flex justify-end z-10">
          <button className="bg-black text-white dark:invert dark:font-normal py-[15px] px-10 rounded font-medium text-base">
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
