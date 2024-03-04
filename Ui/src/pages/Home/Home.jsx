import Button from '@mui/material/Button';
import React, { useState } from 'react'
import QuoteDialog from './QuoteDialog'

function Home() {
    const [showQouteForm, setShowQuoteForm] = useState(false)

    return (
        <div className=" mt-20 p-4 max-w-sm mx-auto flex flex-col">
            <h1 className="text-3xl font-bold text-center mb-4">Dadir Design</h1>
            <p className='text-center'>Dadir Design stands as a premier furniture assembly provider, catering to Columbus, OH, and its neighboring regions. We deliver prompt and expert solutions for all your furniture setup requirements.</p>

            <div className="flex justify-center py-5">
                <Button
                    variant="contained"
                    onClick={() => setShowQuoteForm(true)}
                    color='salmon'
                    className="mt-5 "
                >
                    Send us a text
                </Button>
            </div>
            <QuoteDialog open={showQouteForm} handleClose={() => setShowQuoteForm(false)} />
        </div>
    );
}

export default Home