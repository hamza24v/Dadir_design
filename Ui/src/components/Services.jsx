import React from 'react'
import ServiceCard from './ServiceCard';
import { services } from '../constants/services_text';

function Services() {
  return (
    <>
      <h2 className='text-3xl mb-5 font-semibold text-center'>Services We Offer</h2>
      <div className="flex flex-cols-1 md:flex-cols-2 lg:flex-cols-3 max-w-full justify-center items-start flex-wrap">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </>
  );
}

export default Services