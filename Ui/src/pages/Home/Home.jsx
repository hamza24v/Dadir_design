import Button from '@mui/material/Button';
import React, { useState } from 'react'
import QuoteDialog from './QuoteDialog'
import { intro_se } from '../../constants/home_text';
import Services from '../../components/Services';
import GalleriesSneakPeek from '../../components/GalleriesSneakPeek';

function Home() {
    const [showQouteForm, setShowQuoteForm] = useState(false)

    return (
        <div className="grid place-items-center mt-20 container px-4 py-8 text-large">
            <h2 className="text-4xl font-semi-bold text-center mb-4">Dadir Design</h2>
            <div
                className="mb-5 w-1/3 text-center md:text-lg leading-relaxed text-gray-700 text-large">
                {intro_se}
            </div>
            <Button
                variant="contained"
                onClick={() => setShowQuoteForm(true)}
                color='salmon'
            >
                Book an appointment
            </Button>
            <QuoteDialog open={showQouteForm} handleClose={() => setShowQuoteForm(false)} />

            {/* About Us Section */}
            <div className='my-20'>
                <h2 className='text-3xl font-semibold text-center'>Services We Offer</h2>
                <Services/>
            </div>

            {/* Testimonials Section */}
            
            <div className='my-20'>
                <h2 className='text-3xl font-semibold text-center mb-4'>What Our Clients Say</h2>
                {/* Testimonials carousel or grid */}
            </div>

            {/* Contact Section */}
            <div className='my-20'>
                <h2 className='text-3xl font-semibold text-center mb-4'>Galleries</h2>
                <GalleriesSneakPeek />
            </div>

            {/* Contact Section */}
            <div className='my-20'>
                <h2 className='text-3xl font-semibold text-center mb-4'>Get In Touch</h2>
                {/* Contact form or details */}
            </div>
        </div>
    );
}

export default Home