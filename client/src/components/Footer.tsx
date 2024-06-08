import React from 'react'
import { useTranslations } from 'next-intl';
import { FaTwitter,FaDiscord  } from "react-icons/fa";


const Footer = () => {
  // Translation
  const t = useTranslations('Header');
  return (
    <footer className='w-full h-70 bg-[#222222] bottom-0 border-t  border-t-[#ffffff33] '>
      <div className="flex justify-between p-5 mx-16">
        <div className="flex gap-5 items-center ">
          <figure className=' flex space-x-4 items-center '>
            <img src="/assets/icons/favicon.svg" alt="icon" width={40} draggable={false} />
            <p className='font- text-white font-bold'> <span className='text-orange-300' >BURGER</span> ANIME  </p>
          </figure>
          <p className='text-grey'> {t('Contact')} </p>
          <p className='text-grey'> { t('About') }</p>
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