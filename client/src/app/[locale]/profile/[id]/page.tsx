'use client';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AnimeCard from '@/components/AnimeCard';
import { BiFilterAlt } from "react-icons/bi";
import { MdOutlineRemoveRedEye, MdBookmarkBorder,MdDone ,MdOutlineFolder   } from "react-icons/md";
import { Avatar, AvatarFallback , AvatarImage } from "@/components/ui/avatar"


import { jwtDecode } from "jwt-decode";
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface AccunetObject {
   userId: string,
   username: string,
   email: string,
   avatar: string,
   role: {
      admin: boolean;
      modrator: boolean;
      helper: boolean;
      vip: boolean;
      demo: boolean;
   }

}

function Profile() {

  // Translation
  const p = useTranslations('AvatarRole');

  // Get Token & Decode it
  const [token, setToken] = useState<string | null>(null);
  const [decoded, setDecoded] = useState<any | null>(null);
  

  useEffect(() => {
     if (typeof window !== 'undefined') {
        const storedToken = localStorage.getItem('token');
        if (storedToken != "undefined" && storedToken != "" ) {
           setToken(storedToken);
           const decodedToken = storedToken ? jwtDecode<AccunetObject>(storedToken) : {};
           setDecoded(decodedToken);
           
        }

        else {
           localStorage.removeItem("token");
        }
       
     }
  }, [token , usePathname()]);


  return (
    <div className='min-h-screen'>
      <div className=' h-72 relative'>
        <Image src='/assets/images/cover.jpg' width={900} height={500}  alt='Background Image' className='absolute inset-0 w-full h-full' />
        <div className='absolute inset-0 flex gap-4 items-center justify-start ml-36 z-10 mt-32'>
        <Avatar className='mb-4  w-28 h-28'>
      <AvatarImage src={ decoded ? decoded.avatar : "https://github.com/shadcn.png" } alt=" avatar " draggable={false} />
      <AvatarFallback>👀</AvatarFallback>
    </Avatar>
          <h1 className='text-2xl font-semibold text-white'> { decoded ? decoded.username : "Username" } </h1>
          <div className=' select-none '>
                        <span className="uppercase font-extrabold "> 
                           { 
                          decoded && Object.keys(decoded).length > 0 ?
                           decoded && decoded.role.admin == true ? <span className=" badge border-none bg-orange-600 text-white " > {p('Admin')} </span> :
                           decoded &&   decoded.role.modrator == true ? <span className=" badge border-none bg-purple-500 text-white ">{p('Moderator')}</span> :
                           decoded &&  decoded.role.helper == true ? <span className=" badge border-none bg-blue-500 text-white ">{p('Helper')}</span> :
                           decoded &&  decoded.role.vip == true ? <span className=" badge border-none bg-green-600 text-white " >VIP</span> :
                           decoded &&  decoded.role.demo == true ? <span className=" badge border-none bg-yellow-400 text-black ">{p('Demo')}</span> : <span>Member</span> 
                           : "Member"

                           } 
                        </span>
          </div>
        </div>
        <div className='absolute inset-0 bg-black opacity-50'></div> {/* To darken the background image */}
      </div>
      <div className='h-2/3 p-4'>
        <Tabs defaultValue='watching' className='w-full '>
          <TabsList className='flex justify-around'>
            <TabsTrigger value='watching'><MdOutlineRemoveRedEye className='mr-2 text-lg'/>Watching</TabsTrigger>
            <TabsTrigger value='toWatch'><MdBookmarkBorder  className='mr-2 text-lg'/>To Watch</TabsTrigger>
            <TabsTrigger value='watched'><MdDone  className='mr-2 text-lg'/>Watched</TabsTrigger>
            <TabsTrigger value='collection'><MdOutlineFolder  className='mr-2 text-lg'/>Collection</TabsTrigger>
            <div className='flex justify-center items-center gap-6'>
            Sort By
            <Button className='w-26 text-base'><BiFilterAlt className='mr-2'/>Filters</Button>
            </div>
   
          </TabsList>
          <TabsContent value='watching'>
            {/* Content for Watching tab */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 px-10">
            <AnimeCard 
            title='Naruto'
            imageUrl='https://cdn.myanimelist.net/images/anime/13/17405.jpg'
            year={2002}
            trailerId='3e2oKU4zZm0'
            rating={4}
            category='Action'
            />
              <AnimeCard 
            title='Naruto'
            imageUrl='https://cdn.myanimelist.net/images/anime/13/17405.jpg'
            year={2002}
            trailerId='3e2oKU4zZm0'
            rating={4}
            category='Action'
            />
              <AnimeCard 
            title='Naruto'
            imageUrl='https://cdn.myanimelist.net/images/anime/13/17405.jpg'
            year={2002}
            trailerId='3e2oKU4zZm0'
            rating={4}
            category='Action'
            />
              <AnimeCard 
            title='Naruto'
            imageUrl='https://cdn.myanimelist.net/images/anime/13/17405.jpg'
            year={2002}
            trailerId='3e2oKU4zZm0'
            rating={4}
            category='Action'
            />
              <AnimeCard 
            title='Naruto'
            imageUrl='https://cdn.myanimelist.net/images/anime/13/17405.jpg'
            year={2002}
            trailerId='3e2oKU4zZm0'
            rating={4}
            category='Action'
            />
              <AnimeCard 
            title='Naruto'
            imageUrl='https://cdn.myanimelist.net/images/anime/13/17405.jpg'
            year={2002}
            trailerId='3e2oKU4zZm0'
            rating={4}
            category='Action'
            />
              <AnimeCard 
            title='Naruto'
            imageUrl='https://cdn.myanimelist.net/images/anime/13/17405.jpg'
            year={2002}
            trailerId='3e2oKU4zZm0'
            rating={4}
            category='Action'
            />
              <AnimeCard 
            title='Naruto'
            imageUrl='https://cdn.myanimelist.net/images/anime/13/17405.jpg'
            year={2002}
            trailerId='3e2oKU4zZm0'
            rating={4}
            category='Action'
            />

            </div>



          </TabsContent>
          <TabsContent value='toWatch'>
            {/* Content for To Watch tab */}
            towatch
          </TabsContent>
          <TabsContent value='watched'>
            {/* Content for Watched tab */}
            watched
          </TabsContent>
          <TabsContent value='collection'>
            {/* Content for Collection tab */}
            collection
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Profile;
