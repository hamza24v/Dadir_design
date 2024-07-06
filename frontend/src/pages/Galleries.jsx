import React from 'react';
import { galleries_text } from '../constants/galleries';
import GalleryItem from './GalleryItem';
import { galleryData } from '../constants/galleries';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

function Galleries({ showPreview }) {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
  return (
    <div className="flex flex-col justify-center items-center mt-20 px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Galleries</h1>
      {!showPreview && <p className="mb-5 w-full md:w-2/3 text-center text-lg leading-relaxed text-gray-700">
        {galleries_text}
      </p>}

      <div className="grid grid-col mb-10 w-full justify-items-center mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  items-center">
          {galleryData.map((item, index) => {
            if (index < 8 && showPreview) {
               return <GalleryItem key={index} item={item} />
            } else if (!showPreview) {
              return <GalleryItem key={index} item={item} />
            }
          })}
        </div>
      </div>
      {!showPreview ?
        <Button size='large' variant='contained' color='salmon'> View more</Button>
        :
        <NavLink to='/Galleries' onClick={scrollToTop}>
          <Button size='large' variant='contained' color='salmon'> View more</Button>
        </NavLink>
      }
    </div>
  );
}

export default Galleries;
