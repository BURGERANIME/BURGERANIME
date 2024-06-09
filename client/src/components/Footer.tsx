"use client";

import React from 'react'
import { useTranslations } from 'next-intl';
import { FaTwitter,FaDiscord  } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  // Translation
  const t = useTranslations('Header');


  //
  const server = process.env.NEXT_PUBLIC_SERVER_URL;
  const pathname = usePathname();
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      if (storedToken && storedToken !== "undefined") {
        setToken(storedToken);
      } else {
        localStorage.removeItem("token");
      }
    }
  }, [token , pathname]);

  useEffect(() => {
    if (token) {
      axios.post(`${server}/api/accounts/authenticate`, { token })
        .then((res) => {
          const newToken = res.data.token;
          if (newToken && newToken !== "undefined") {
            setToken(newToken);
            localStorage.setItem('token', newToken);
          } else {
            localStorage.removeItem("token");
            //router.push('/');
            window.location.href = '/';
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
          router.push('/');
          //window.location.href = '/';
        });
    } else {
      //router.push('/');
      //window.location.href = '/';
    }
  }, [pathname , token]);

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