"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function NotFound() {

  const pathname = usePathname();

  setTimeout(() => {  
    
    if (pathname !== "/") {
      window.location.href = "/";
    }
    
  }, 1000);
  
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
                        className="mt-[-5em] text-[#222] w-32 m-auto font-bold relative z-10"
                    >
                         <span className="text-blue-500 font-bold "> Page not found. Wait, you will be redirected . . .</span>  
                    </p>
                  </figure>
         
          </div>
    </>
  );
}