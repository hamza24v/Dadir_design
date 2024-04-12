import React, { useState } from 'react';
import Button from '@mui/material/Button';
function ServiceCard({ title, description }) {


    return (
        <div className="group w-[300px] h-auto p-5 m-2 bg-orange-300 border border-gray-300 shadow-md hover:shadow-xl rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform">
            <div className='flex flex-col h-full'>
                <div className="flex justify-center">
                    <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <div className='mb-5'>
                    <p className="mt-2">{description}</p>
                </div>
                <Button
                    size='large'
                    variant='contained'
                    color='salmon'
                >Shop Now
                </Button>
            </div>
        </div>
    );
}

export default ServiceCard;
