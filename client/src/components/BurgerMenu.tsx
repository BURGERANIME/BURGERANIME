"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Use useEffect to add and clean up the event listener
  useEffect(() => {
    const handleKeyDown = (event : any) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }

      if (event.key === 'Tab') {
        setIsOpen(true);
      }

    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <Image
        src="/assets/logos/logo.png"
        alt="logo"
        width={50}
        height={50}
        onClick={() => setIsOpen(!isOpen)}
        className="btn w-full h-full bg-transparent border-none hover:bg-transparent"
      />
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#2222229f] text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-10`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white focus:outline-none mb-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Menu items */}

          <div className="block w-full mt-10 m-auto text-center">
            <ul className="space-y-4 w-full text-center">
              <li>
                <a href="#" className="text-white text-lg font-bold border-b-2 border-b-transparent duration-150 hover:text-orange-500 hover:border-b-white">Home</a>
              </li>
              <li>
                <a href="#" className="text-white text-lg font-bold border-b-2 border-b-transparent duration-150 hover:text-orange-500 hover:border-b-white">About</a>
              </li>
              <li>
                <a href="#" className="text-white text-lg font-bold border-b-2 border-b-transparent duration-150 hover:text-orange-500 hover:border-b-white">Services</a>
              </li>
              <li>
                <a href="#" className="text-white text-lg font-bold border-b-2 border-b-transparent duration-150 hover:text-orange-500 hover:border-b-white">Contact</a>
              </li>
            </ul>
          </div>

          <div className="mt-10 space-y-4 m-auto text-center">
            <button className="btn w-24 bg-[#fff] text-black border-none hover:bg-white hover:text-black">Log In</button> <br />
            <button className="btn bg-orange-500 text-white border-none hover:bg-white hover:text-black">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
