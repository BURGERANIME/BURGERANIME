import React from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AnimeCard from '@/components/AnimeCard';
import { BiFilterAlt } from "react-icons/bi";
import { MdOutlineRemoveRedEye, MdBookmarkBorder,MdDone ,MdOutlineFolder   } from "react-icons/md";


function Profile() {
  return (
    <div className='min-h-screen'>
      <div className='h-96 relative'>
        <Image src='/assets/images/cover.jpg' layout='fill' objectFit='cover' alt='Background Image' className='absolute inset-0 w-full h-full' />
        <div className='absolute inset-0 flex gap-4 items-center justify-start ml-36 z-10 mt-32'>
        <Avatar className='mb-4 w-20 h-20'>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
          <h1 className='text-2xl font-semibold text-white'>Username</h1>
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
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 px-10">
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
