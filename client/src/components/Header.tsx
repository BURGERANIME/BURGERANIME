// lastupdate 14 Jun 24
"use client"
import {useTranslations} from 'next-intl';
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";
import Register from "./Register";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

export default function Header() {
   //
   const t = useTranslations('Header');
   const pathname = usePathname();


   const handleChangeLanguage = (locale: string) => {
      const newPath = locale === 'en' ? '/en' : '/ar'; // Adjust routes as per your setup
      window.location.href = newPath;
    };
   //
   const [isScrolled, setIsScrolled] = useState(false);

   const handleScroll = () => {
     const scrollTop = document.documentElement.scrollTop;
     setIsScrolled(scrollTop > 0);
   };

   useEffect(() => {
     window.addEventListener('scroll', handleScroll);
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);

  // getLinkClasses function
   const getLinkClasses = (linkPath: string) => {
      const isActive = pathname === linkPath || pathname.startsWith(`${linkPath}/`);
      return isActive ? 'text-white font-bold' : 'hover:text-white hover:font-bold';
    };


return (
   <header className={`fixed flex w-full h-24 items-center justify-around z-50 transition-colors duration-300 ${isScrolled ? ' bg-[#222]' :  'bg-[#22222252]' }`}>
      <div className="flex items-center space-x-10">
         <figure className="flex space-x-4 items-center">
            <BurgerMenu />
            {
               /*
               <Image
               src="/assets/logos/logo.png"
               alt="logo"
               width={50}
               height={50}
               className="btn w-full h-full bg-transparent border-none hover:bg-transparent"
            />
            */
            }

         </figure>

         {
            // Mobile menu
            /*
                  <Image
                     src="/assets/logos/ba_logo.png"
                     alt="logo_text"
                     width={200}
                     height={50}
                     className=" block m-auto text-center md:hidden "
            />
            */
         }

            <ul className="hidden md:flex space-x-4 text-lg text-[#ffffff8c]">


                     <li className={`cursor-pointer duration-300 ${pathname === '/ar' || pathname === '/en' ? 'text-white font-bold' : ''}`}>
                           <Link href={`/${pathname.startsWith('/en') ? 'en' : 'ar'}`} className=' duration-150 hover:text-white ' >{t('Home')}</Link>
                     </li>


                     <li className={`cursor-pointer duration-150 ${getLinkClasses(`/${pathname.startsWith('/en') ? 'en' : 'ar'}/catalog`)}`}>
                     <Link href={`/${pathname.startsWith('/en') ? 'en' : 'ar'}/catalog`}>{t('Catalog')}</Link>
                     </li>
                     <li className={`cursor-pointer duration-150 ${getLinkClasses(`/${pathname.startsWith('/en') ? 'en' : 'ar'}/news`)}`}>
                     <Link href={`/${pathname.startsWith('/en') ? 'en' : 'ar'}/news`}>{t('News')}</Link>
                     </li>
                     <li className={`cursor-pointer duration-150 ${getLinkClasses(`/${pathname.startsWith('/en') ? 'en' : 'ar'}/collection`)}`}>
                     <Link href={`/${pathname.startsWith('/en') ? 'en' : 'ar'}/collection`}>{t('Collection')}</Link>
                     </li>
            </ul>

      </div>

      <div>
         <label>
         <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 16 16"
               fill="currentColor"
               className="w-16 h-16 opacity-70 text-white md:hidden btn bg-black  "
            >
               <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
               />
            </svg>
         </label>
         <label className="input input-bordere border-3 border-[#ffffff33] font-bold hidden md:flex items-center gap-2 w-[500px] bg-[#f8f8f831] text-white outline-none">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 16 16"
               fill="currentColor"
               className="w-6 h-6 opacity-70"
            >
               <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
               />
            </svg>
            <input
               type="text"
               className="grow placeholder-white outline-none"
               placeholder={t('Search')}
            />
         </label>
      </div>
       {/* Select Language */}
       <div className=" relative z-[1000] dropdown dropdown-hover flex items-center">
         <div tabIndex={0} role="button" className="m-1 flex items-center ">

            <div tabIndex={0} role="button" className="m-1 flex items-center">
               {pathname.startsWith('/en') ? (
                  <img src="/assets/icons/uk.svg" width={20} />
               ) : pathname.startsWith('/ar') ? (
                  <img src="/assets/icons/tn.svg" width={20} />
               ) : (
                  <img src="/assets/icons/flag.svg" width={20} />
               )}
            </div>

         </div>
         <ul tabIndex={0} className="flex items-center dropdown-content z-[1] menu p-2 shadow bg-[#222] rounded-box w-16 ">
            <li onClick={() => handleChangeLanguage('en')}><img src='/assets/icons/uk.svg' width={50} /></li>
            <li onClick={() => handleChangeLanguage('ar')}><img src='/assets/icons/tn.svg' width={50} /></li>
         </ul>
      </div>
      {/* Avatar */}
      <Register />
   </header>
);
}
