import React from 'react'
import dadiro from '../assets/dadiro.jpg'
function About() {
  return (
    <div className='grid place-items-center mt-20 container mx-auto px-4 py-8 text-large' id="Assembly">
      <h2 className="text-4xl font-semibold text-center mb-6">About</h2>
      <div className='flex items-center space-x-4 px-4 py-4'>
        <div className='grid justify-items-center w-1/2'>
        <img src={dadiro} alt='dadiro' className="w-7/12" />
        </div>

        <div className='w-1/2'>
        <p className='text-base md:text-xl leading-loose text-gray-700 text-large'>
          At Dadir Design, we're not just about furniture—we're about the stories that unfold in your living spaces. 
          Our journey began with a vision to offer personalized furniture assembly and craftsmanship that turns houses into homes. 
          Rooted in tradition yet innovating for today, we're proud to serve Columbus and its surrounding communities with the same 
          dedication and attention to detail that have been our trademarks for years. From cherished family heirlooms to contemporary pieces, 
          each project at Dadir Design is more than a task; it's our passion.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About