import React from 'react';
import { outdoor_furniture_assembly } from '../../constants/services_text';
import { Button } from '@mui/material';

function OutdoorAssembly() {
    return (
        <div className='grid place-items-center mt-20 container mx-auto px-4 py-8 text-large'>
            <h2 className="text-3xl font-bold text-center mb-6">Outdoor Furniture Assembly</h2>
            <div 
                className="mb-5 text-base md:text-lg leading-relaxed text-gray-700 text-large text-left">
                {outdoor_furniture_assembly}
            </div>
            <Button variant='contained'>
                    Book your Outdoor Furniture Assembly service now
            </Button>
        </div>
    );
}

export default OutdoorAssembly;
