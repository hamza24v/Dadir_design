// Import React and Tailwind CSS
import React from 'react';
import 'tailwindcss/tailwind.css';
import { furniture_assembly } from '../constants/services_text';
function Services() {
    const paragraphs = furniture_assembly.split('\n\n');
    return (
        <div className={`mt-20 container mx-auto px-4 py-8 text-large`} id="services">
            <h2 className="text-3xl font-bold text-center mb-6">Services</h2>
            <div 
                className="text-base md:text-lg leading-relaxed text-gray-700 text-large text-left">
                {paragraphs.map((paragraph, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
            </div>
            <button className="mt-4 bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition duration-300 ease-in-out">
                    Book your Furniture Assembly service now
            </button>
        </div>
    );
}

export default Services;
