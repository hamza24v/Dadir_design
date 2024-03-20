import React, { useState } from 'react'
import { furniture_delivery } from '../../constants/services_text';
import { Button } from '@mui/material';
import QuoteDialog from '../Home/QuoteDialog';

function Delivery() {
    const [showQouteForm, setShowQuoteForm] = useState(false)

    return (
        <div className='grid place-items-center mt-20 container mx-auto px-4 py-8 text-large' id="Assembly">
            <h2 className="text-4xl font-semi-bold text-center mb-6">Furniture Delivery</h2>
            <p 
                className="mb-5 w-1/2 text-base md:text-lg leading-relaxed text-gray-700 text-large text-center">
                {furniture_delivery}
            </p>
            <Button
                variant="contained"
                onClick={() => setShowQuoteForm(true)}
                color='salmon'
                className="mt-5"
            >
                Book an appointment
            </Button>
            <QuoteDialog open={showQouteForm} handleClose={() => setShowQuoteForm(false)} />
        </div>
    );
}

export default Delivery