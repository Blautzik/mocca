import React, { useState , useRef} from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from 'next/link'



const NavBa = () =>  {
  const ref=useRef()
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="h-100 w-full flex items-center justify-between">
              <Link href='/'>
              <Image className='w-100px h-100px'
                  src='/img/Lex-logo-blanco.png'
                  alt='accidente de trabajo'
                  width='125px'
                  height='50px'
                  layout='fixed'
                  objectFit='contain'
                  objectPosition='10px 5px'
                  blurDataURL="/img/Lex-logo-dark-preloader.png"
                  placeholder="blur"
                  />
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline flex-end space-x-4">
                  <Link href='/accidentes-de-trabajo-art'>
                    <a className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                      Accidentes de trabajo ART
                    </a>
                  </Link>
                  <Link href='/enfermedades-profesionales'>
                    <span className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                      Enfermedades profesionales
                    </span>
                  </Link>
                  <Link href='/despidos'>
                    <span className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                      Despidos
                    </span>
                  </Link>
                  <Link href='/accidentes-de-transito'>
                    <span className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                      Accidentes de tránsito
                    </span>

                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-150 transform"
          enterFrom="opacity-0 scale-0 h-0"
          enterTo="opacity-100 scale-100 h-full"
          leave="transition ease-in duration-105 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-0"
        >
              <Link href='/'>
                <div className="absolute w-20 h-16  -top-16 left-10"onClick={() => setIsOpen(!isOpen)}>
                  <span>.</span>
                </div>
              </Link>
            <div className="md:hidden h-full" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3  space-y-1 sm:px-3 h-full">
                <Link href='/accidentes-de-trabajo-art'>
                  <span onClick={() => setIsOpen(!isOpen)} className=" text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Accidentes de trabajo ART
                  </span>
                </Link>

                <Link href='/enfermedades-profesionales'>
                  <span onClick={() => setIsOpen(!isOpen)} className=" text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Enfermedades profesionales
                  </span>
                </Link>

                <Link href='/despidos'>
                  <span onClick={() => setIsOpen(!isOpen)} className=" text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Despidos
                  </span>
                </Link>
                <Link href='/accidentes-de-transito'>
                  <span onClick={() => setIsOpen(!isOpen)} className=" text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Accidentes de tránsito
                  </span>
                </Link>
              </div>
            </div>

        </Transition>
      </nav>
      </div>
      )
    }

export default NavBa