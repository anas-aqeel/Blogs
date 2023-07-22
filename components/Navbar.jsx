'use client'
import { Disclosure } from '@headlessui/react'
import { useSelectedLayoutSegments } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ToogleButton from './ToogleButton'

const navigation = [
  {
    path: '',
    name: 'Blog',
    href: '/',
    current: false,
  },
  {
    path: '',
    name: 'Projects',
    href: '/projects',
    current: false,
  },
  {
    path: '',
    name: 'About',
    href: '/about',
    current: false,
  },
  {
    path: '',
    name: 'Newsletter',
    href: '/about',
    current: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  let path = useSelectedLayoutSegments()
  return (
    <Disclosure
      as="nav"
      className="bg-white fixed top-0 left-0 right-0 shadow-lg z-40"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 py-3 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                
                  <h1 className="text-black font-bold text-lg ml-2">
                  Your Name
                  </h1>
                </div>
                <div className="hidden md:ml-6 md:flex w-full justify-end items-center">
                  <div className="flex gap-x-5">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          path.includes(item.path)
                            ? 'text-[#999900] '
                            : 'text-[#65735b] hover:text-[#999900]',
                          'rounded-md px-3 py-2 text-sm font-normal',
                        )}
                        aria-current={
                          path.includes(item.path) ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className='ml-5'>
                <ToogleButton/>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    path.includes(item.path)
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-sm font-medium',
                  )}
                  aria-current={path.includes(item.path) ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
