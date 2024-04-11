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
        <div className="my-10 flex flex-col w-auto justify-center items-center px-4">
            <h2 className='text-3xl font-semibold text-center mb-4'>Galleries</h2>
            <div className="flex mb-10  justify-center mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4">
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