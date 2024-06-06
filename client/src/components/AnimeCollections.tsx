import { Button } from "./ui/button";

import { FaPlus } from "react-icons/fa6";
import CollectionCover from '@/components/CollectionCover'

interface Collection {
  title: string;
  images: string[];
}

const collections: Collection[] = [
  {
    title: "The Best Mystical Anime",
    images: ["/assets/images/001.jpg", "/assets/images/002.jpg", "/assets/images/003.jpg"]
  },
  {
    title: "The Best Mystical Anime",
    images: ["/assets/images/001.jpg", "/assets/images/002.jpg", "/assets/images/003.jpg"]
  },
  {
    title: "The Best Mystical Anime",
    images: ["/assets/images/001.jpg", "/assets/images/002.jpg", "/assets/images/003.jpg"]
  },
  {
    title: "The Best Mystical Anime",
    images: ["/assets/images/001.jpg", "/assets/images/002.jpg", "/assets/images/003.jpg"]
  }
];
  
const AnimeCollections = () =>{
    return (
      <div className=" min-h-screen p-8">
        <div className="text-white text-2xl mb-6 mt-32 flex justify-between">
          <p className="font-semibold text-3xl">Featured Collections</p>
          <Button><FaPlus className="mr-2 "/>Create Collection</Button>

          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <div key={index} className=" h-72 bg-[#343434] rounded-lg overflow-hidden shadow-lg">
              <div className="p-4  h-1/3 flex justify-center items-center">
                <h3 className="text-white text-xl text-center w-44">{collection.title}</h3>
              </div>

              <div className="">
              <CollectionCover images={collection.images}  />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Button  className=" w-full ">
            Show More
          </Button>
        </div>
      </div>
    );
  }
  
  export default AnimeCollections;