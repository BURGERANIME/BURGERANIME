// TODO : fix layout, fix image size, fix image position

import React from 'react';
import Image from 'next/image';

interface CollectionCoverProps {
  images: string[];
}

const CollectionCover: React.FC<CollectionCoverProps> = ({ images }) => {
  if (!images || images.length === 0) {
    return <div className="relative w-full h-48">N/A default cover img</div>;
  }

  return (
    <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute w-24 sm:w-32 md:w-40 lg:w-48   
            ${index === 0 ? 'translate-x-4 -rotate-6 sm:translate-x-6 md:translate-x-10' : ''}
            ${index === 1 ? 'translate-x-16 translate-y-4 sm:translate-x-20 md:translate-x-32' : ''}
            ${index === 2 ? 'translate-x-28 translate-y-8 rotate-6 sm:translate-x-32 md:translate-x-52' : ''}
          `}
        >
          <Image
            src={img}
            alt={`Cover ${index}`}
            width={300}
            height={120}
            className="rounded-2xl border-[#343434] border-4 w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default CollectionCover;
