import React from 'react'
import ServiceCard from './ServiceCard';
import { services } from '../constants/services_text';

function Services() {
    return (
        <div className="flex w-full justify-center items-start flex-wrap">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      );
}

export default Services