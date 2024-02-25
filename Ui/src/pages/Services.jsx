// Import React and Tailwind CSS
import React from 'react';
import 'tailwindcss/tailwind.css';
import { furniture_assembly } from '../constants/services_text';
import { Button } from '@mui/material';
function Services() {
    const paragraphs = furniture_assembly.split('\n\n');
    return (
        <div className={`grid place-items-center mt-20 container mx-auto px-4 py-8 text-large`} id="services">
            <h2 className="text-3xl font-bold text-center mb-6">Services</h2>
            <div 
                className="mb-5 text-base md:text-lg leading-relaxed text-gray-700 text-large text-left">
                {paragraphs.map((paragraph, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
            </div>
            <Button variant='contained'>
                    Book your Furniture Assembly service now
            </Button>
        </div>
    );
}

export default Services;
