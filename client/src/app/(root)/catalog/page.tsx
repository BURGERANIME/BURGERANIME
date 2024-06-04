"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Checkbox } from "@/components/ui/checkbox";
import AnimeCard from "@/components/AnimeCard";
import { Button } from "@/components/ui/button";

interface Anime {
  mal_id: number;
  title: string;
  year: number;
  genres: { name: string }[];
  images: { jpg: { image_url: string } };
  score: number;
  trailer: { url: string };
}

export default function Catalog() {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchAnime = async (page: number) => {
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime?page=${page}`);
      const newAnimeList = response.data.data;
      setAnimeList(prevList => [...prevList, ...newAnimeList]);
      setHasMore(newAnimeList.length > 0);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching anime data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnime(page);
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <div className="p-10 min-h-screen">
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
          <div className="catalog-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 ">
            {animeList.map(anime => (
              <AnimeCard
                key={anime.mal_id}
                title={anime.title}
                year={anime.year }
                category={anime.genres.map(genre => genre.name).join(', ')}
                imageUrl={anime.images.jpg.image_url}
                rating={anime.score}
                trailerUrl={anime.trailer.url}
              />
            ))}
      
          </div>
          {loading && <div>Loading...</div>}
                  {!loading && hasMore && (
                    <div className="flex justify-center mt-6">
                      <Button onClick={loadMore} className=" w-full ">
                        Show More
                      </Button>
                    </div>
                  )}
          </div>
        </div>
      </div>

  );
}
