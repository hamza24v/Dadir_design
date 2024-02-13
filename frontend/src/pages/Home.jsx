import { Button } from '@mui/material';
import React from 'react'

function Home() {

  return (
    <div className=" mt-20 p-4 max-w-sm mx-auto flex-col">
      <h1 className="text-3xl font-bold text-center mb-4">Dadir Design</h1>
      <p>Dadir Design stands as a premier furniture assembly provider, catering to Columbus, OH, and its neighboring regions. We deliver prompt and expert solutions for all your furniture setup requirements.</p>
      <button className="mt-5 bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"> Get a Free Quote</button>
    </div>
  );
}


export default Home