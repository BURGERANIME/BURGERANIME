import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Checkbox } from "@/components/ui/checkbox";
import AnimeCard from "@/components/AnimeCard";

export default function Catalog() {
  return (
    <main className="p-10 min-h-screen">
      <div className="flex justify-between mt-32 pb-8">
        <h1 className="text-2xl text-white">Catalog</h1>
        <div className="flex items-center space-x-4">
          <span>Sort By</span>
          <select
            className="border rounded px-2 py-1"
          >
            <option value="year">Year</option>
            <option value="name">Name</option>
            <option value="rating">Rating</option>

            
          </select>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-1/6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Year</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="2020" />
                    <label
                      htmlFor="2020"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      2020
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="2021" />
                    <label
                      htmlFor="2021"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      2021
                    </label>
                  </div>
                  {/* Add more years as needed */}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Season</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2">
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="winter" />
                    <label
                      htmlFor="winter"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Winter
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="spring" />
                    <label
                      htmlFor="spring"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Spring
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="summer" />
                    <label
                      htmlFor="summer"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Summer
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="fall" />
                    <label
                      htmlFor="fall"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Fall
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Genres</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2">
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="action" />
                    <label
                      htmlFor="action"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Action
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="adventure" />
                    <label
                      htmlFor="adventure"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Adventure
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="comedy" />
                    <label
                      htmlFor="comedy"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Comedy
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="drama" />
                    <label
                      htmlFor="drama"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Drama
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="fantasy" />
                    <label
                      htmlFor="fantasy"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Fantasy
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="horror" />
                    <label
                      htmlFor="horror"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Horror
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="mystery" />
                    <label
                      htmlFor="mystery"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mystery
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="romance" />
                    <label
                      htmlFor="romance"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Romance
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sci-fi" />
                    <label
                      htmlFor="sci-fi"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Sci-Fi
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="slice-of-life" />
                    <label
                      htmlFor="slice-of-life"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Slice of Life
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sports" />
                    <label
                      htmlFor="sports"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Sports
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="supernatural" />
                    <label
                      htmlFor="supernatural"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Supernatural
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="thriller" />
                    <label
                      htmlFor="thriller"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Thriller
                    </label>
                  </div>
                 </div> 

              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className=" w-full">
          {/* anime content here 🤷‍♂️ */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 ">
            <AnimeCard 
             title="Anime Title"
             imageUrl="https://cdn.myanimelist.net/images/anime/10/47347.jpg"
             year={2021}
             category="Action, Adventure, Fantasy"
             rating={8.5}
             trailerUrl="/assets/videos/mainscene.mp4"
             />
    
          </div>
        </div>
      </div>
    </main>
  );
}
