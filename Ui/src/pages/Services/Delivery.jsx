import React from 'react'
import { furniture_delivery } from '../../constants/services_text';
import { Button } from '@mui/material';

function Delivery() {
    
    return (
        <div className={`grid place-items-center mt-20 container mx-auto px-4 py-8 text-large`} id="Assembly">
            <h2 className="text-3xl font-bold text-center mb-6">Furniture Delivery</h2>
            <p 
                className="mb-5 text-base md:text-lg leading-relaxed text-gray-700 text-large text-left">
                {furniture_delivery}
            </p>
            <Button variant='contained'>
                    Book your Furniture Delivery service now
            </Button>
        </div>
    );
}

export default Delivery