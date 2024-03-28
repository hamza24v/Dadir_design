import React from 'react'
import GalleryItem from '../pages/GalleryItem';
import { galleryData } from '../constants/galleries';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

function GalleriesSneakPeek() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className="flex flex-col justify-center items-center px-4">
            <div className="flex mb-10 w-full justify-center mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  items-center">
                    {galleryData.map((item, index) => {
                        if (index < 6) return <GalleryItem key={index} item={item} />
                    })}
                </div>
            </div>
            <NavLink to='/Galleries' onClick={scrollToTop}>
                <Button size='large' variant='contained' color='salmon'> View more</Button>
            </NavLink>
        </div>
    )
}

export default GalleriesSneakPeek