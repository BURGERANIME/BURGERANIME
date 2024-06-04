"use client"
import React, { useState } from 'react';
import { SlLike, SlDislike, SlStar, SlControlPlay } from "react-icons/sl";

interface AnimeCardProps {
  title: string;
  year: number;
  category: string;
  imageUrl: string;
  rating: number;
  trailerUrl: string;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ title, year, category, imageUrl, rating, trailerUrl }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`m-auto relative w-52 h-80 rounded-2xl overflow-hidden bg-cover bg-center transition-all duration-300 ${hovered ? 'shadow-lg' : ''}`}  
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      {hovered && (
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          src={trailerUrl}
          autoPlay
          loop
          muted
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent"></div>
      
      {!hovered && (
        <div className="absolute bottom-0 w-full p-4">
          <h3 className=" text-base font-semibold text-white">{title}</h3>
          <div className="flex justify-between mt-2 text-xs text-gray">
            <span className="px-2">{year}</span>
            <span className="px-2">{category}</span>
          </div>
        </div>
      )}

      {hovered && (
        <>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center p-3 bg-black bg-opacity-75 rounded-b-2xl">
            <SlStar className="text-white mr-2" />
            <span className="text-lg text-white">{rating}</span>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-4 flex justify-around items-center">
            <button className="flex items-center justify-center p-4 bg-black bg-opacity-70 rounded-full text-white hover:bg-blue-600 transition duration-300">
              <SlControlPlay />
            </button>
            <button className="flex items-center justify-center p-4 bg-black bg-opacity-70 rounded-full text-white hover:bg-green-600 transition duration-300">
              <SlLike />
            </button>
            <button className="flex items-center justify-center p-4 bg-black bg-opacity-70 rounded-full text-white hover:bg-red-600 transition duration-300">
              <SlDislike />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AnimeCard;
