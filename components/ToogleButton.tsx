"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import { BsSun, BsMoon } from 'react-icons/bs'

export default function ToogleButton() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <button
        onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
        className={`relative rounded-full flex justify-between items-center w-[80px] h-[40px] py-1.5 px-3 ${
          theme == 'light' ? 'shadow-2xl' : 'shadow-toogle'
        }`}
      >
        <div
          className={`h-[35px] w-[35px] rounded-full absolute my-auto z-0 ${
            theme == 'light'
              ? 'bg-yellow-300 -translate-x-2'
              : 'bg-black translate-x-7 '
          } transition-all duration-300 transform `}
        />
        <BsSun
          className={`z-10 h-[20px] w-auto ${
            theme == 'light' ? 'text-black ' : 'text-yellow-400'
          }`}
        />

        <BsMoon
          className={`z-10 h-[20px] w-auto ${
            theme == 'light' ? 'text-black' : 'text-white'
          }`}
        />
      </button>
    </>
  )
}
