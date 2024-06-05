import React from 'react'
import { FaTwitter,FaDiscord  } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='w-full h-70 bg-[#222222] bottom-0 border-t  border-t-[#ffffff33] '>
      <div className="flex justify-between p-5 mx-16">
        <div className="flex gap-5 items-center ">
          <figure className=' flex space-x-4 items-center '>
            <img src="/assets/icons/favicon.svg" alt="icon" width={40} draggable={false} />
            <p className='font- text-white'> BurgerAnime  </p>
          </figure>
          <p className='text-grey'>Contacts </p>
          <p className='text-grey'>About Us </p>
        </div>
        <div className=" flex gap-4 justify-center items-center">
          <a  href="https://twitter.com/"  target="_blank" className='bg-white w-fit p-2 rounded-md text-black'>
            <FaTwitter  />
          </a>
          <a href="https://discord.com/invite/" target="_blank" className='bg-white w-fit p-2 rounded-md text-black'>
            <FaDiscord />
          </a>
        </div>
      </div>
      

    </footer>

  )
}

export default Footer