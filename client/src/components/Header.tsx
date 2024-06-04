import Image from "next/image";

export default function Header() {
return (
   <header className=" fixed flex w-full h-28 items-center justify-around  bg-[#33333373] z-[1000]">
      <div className="flex items-center space-x-10">
         <figure className="flex space-x-4 items-center">
            <Image
               src="/assets/logos/logo.png"
               alt="logo"
               width={50}
               height={50}
               className="btn w-full h-full bg-transparent border-none hover:bg-transparent"
            />
           
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

         <ul className=" hidden md:flex space-x-4 text-lg text-[#ffffff8c]   ">
            <li className="text-white font-extrabold cursor-pointer duration-15 ">Home</li>
            <li className=" hover:text-white hover:font-extrabold cursor-pointer duration-150 ">Catalog</li>
            <li className=" hover:text-white hover:font-extrabold cursor-pointer duration-150 ">News</li>
            <li className=" hover:text-white hover:font-extrabold cursor-pointer duration-150 ">Collection</li>
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
               placeholder="Search"
            />
         </label>
      </div>
      <div className="space-x-4 hidden md:block ">
         <button className="btn w-24 bg-[#333] text-white border-none hover:bg-white hover:text-black">Log In</button>
         <button className="btn bg-orange-500 text-white border-none hover:bg-white hover:text-black">
            Get started
         </button>
      </div>
   </header>
);
}
