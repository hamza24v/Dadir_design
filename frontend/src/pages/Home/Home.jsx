import Button from '@mui/material/Button';
import React, { useState } from 'react'
import QuoteDialog from './QuoteDialog'
import { intro_se } from '../../constants/home_text';
import Services from '../../components/Services';
import Galleries from '../Galleries';
import Testimonials from '../../components/Testimonials';

function Home() {
    const [showQouteForm, setShowQuoteForm] = useState(false)

    return (
        <div className="w-auto flex flex-col justify-center m-auto mt-20 container px-4 py-8 text-large">
            <div className='mb-20 flex flex-col items-center'>
                <h2 className="text-4xl font-semibold text-center mb-8">Dadir Design</h2>
                <p
                    className="mb-9 lg:w-1/3 md:w-full text-center text-lg leading-relaxed text-gray-700 text-large">
                    {intro_se}
                </p>
                <Button
                    variant="contained"
                    onClick={() => setShowQuoteForm(true)}
                    color='salmon'
                    size='large'
                >
                    Book an appointment
                </Button>
                <QuoteDialog open={showQouteForm} handleClose={() => setShowQuoteForm(false)} />
            </div>
            <Services />
            <div className='my-10 flex justify-center'>
            <Testimonials />
            </div>
            <Galleries showPreview={true} />

        </div>
    );
}

export default Home