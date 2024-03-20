import React from 'react'
import { galleries_text } from '../constants/galleries';
import GalleryItem from '../pages/GalleryItem';
import { galleryData } from '../constants/galleries';
import Button from '@mui/material/Button';

function GalleriesSneakPeek() {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-8">
      <p className="mb-5 w-full md:w-2/3 text-center text-lg leading-relaxed text-gray-700">
        {galleries_text}
      </p>

      <div className="flex mb-10 w-full justify-center mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  items-center">
          {galleryData.map((item, index) => {
            if(index < 6) return <GalleryItem key={index} item={item} />
        })}
        </div>
      </div>
      <Button size='large' variant='contained' color='salmon'> View more</Button>
      </div>
  )
}

export default GalleriesSneakPeek