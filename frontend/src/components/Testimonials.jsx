import React from 'react'
import { SectionWrapper } from '../hoc'
import { testimonials } from '../constants';
import { InfiniteMovingCards } from './InfiniteCards';

function Testimonials() {

  return (
    <section className='z-[-20] py-10'>
      <h2 className='text-5xl font-semibold text-center mb-4 text-blue-900'>What Our Clients Say</h2>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}

export default SectionWrapper(Testimonials, "testimonials");;
