import Button from '@mui/material/Button';
import React, { useState } from 'react'
import QuoteDialog from './QuoteDialog'
import { intro_se } from '../../constants/home_text';

function Home() {
    const [showQouteForm, setShowQuoteForm] = useState(false)

    return (
        <div className="grid place-items-center mt-20 container px-4 py-8 text-large">
            <h1 className="text-3xl font-bold text-center mb-4">Dadir Design</h1>
            <div
                className="mb-5 w-1/3 text-center md:text-lg leading-relaxed text-gray-700 text-large">
                {intro_se}
            </div>
            <Button
                variant="contained"
                onClick={() => setShowQuoteForm(true)}
                color='salmon'
                className="mt-5"
            >
                Send us a text
            </Button>
            <QuoteDialog open={showQouteForm} handleClose={() => setShowQuoteForm(false)} />
        </div>
    );
}

export default Home