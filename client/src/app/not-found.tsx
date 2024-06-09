'use client';
import { useTranslations } from 'next-intl';
import Image from "next/image";

export default function NotFound() {
  const t = useTranslations('NotFound');
  return (
    <>
            <div className=" select-none relative p-28  ">
         
              <figure className="m-auto relative  grayscale ">
                    <Image 
                        src="/assets/images/konata_error_404.png" 
                        alt="Error 404" 
                        width={250} 
                        height={250}
                        draggable={false}
                        className=" m-auto "
                    />
                    <p 
                        className="mt-[-4.3em] text-[#222] w-32 m-auto font-bold relative z-10"
                    >
                         <span className="text-blue-500 font-bold "> {t('desc')} </span>  
                    </p>
                  </figure>
         
          </div>
    </>
  );
}