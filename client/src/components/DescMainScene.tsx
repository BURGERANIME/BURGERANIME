import Image from "next/image";

export default function DescMainScene() {
  return (
    <section className=" w-full pt-32 md:pt-52 pl-20 ">
      <figure>
         <Image
            src="/assets/images/animes_titles/The_Glassworker.png"
            alt="The Glassworker"
            width={500}
            height={500}
         />
         <p className=" text-white text-3xl font-[cursive] font-bold w-[80%] md:w-[40%] ml-5 ">
         The life of a young glassblower in training and his relationships over the years, as his land goes through war and strife.
         </p>
         <div className=" flex items-center space-x-4 mt-10 ml-5 ">
            <button className="btn bg-white text-black text-lg w-44 border-none duration-150 hover:bg-[whitesmoke] hover:text-black cursor-pointer ">Learn More</button>
            <button className="btn bg-[#222] text-white border-none hover:bg-[#000] hover:text-white">
               <svg width="40px" height="40px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z" fill="white"/>
               </svg>
               To Watch
            </button>

         </div>
      </figure>
    </section>
  )
}
