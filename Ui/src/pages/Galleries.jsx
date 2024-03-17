import React, { useState, useEffect } from 'react'
import { galleries_text } from '../constants/galleries'

function Galleries() {
  return (
    <div className="grid place-items-center mt-20 container px-4 py-8 text-large">
            <h1 className="text-3xl font-bold text-center mb-4">Galleries</h1>
            <div
                className="mb-5 w-1/3 text-center md:text-lg leading-relaxed text-gray-700 text-large">
                {galleries_text}
            </div>
      
      </div>
  )
}

export default Galleries