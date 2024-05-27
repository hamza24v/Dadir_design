import React from 'react'
import ServiceCard from './ServiceCard';
import { services } from '../constants/services_text';
import { Button } from '@mui/material';
import Shop from '../pages/Shop/Shop';
import { NavLink } from 'react-router-dom';

function Services() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-3xl mb-5 font-semibold text-center'>Services We Offer</h2>
      <div className="flex flex-cols-1 md:flex-cols-2 lg:flex-cols-3 max-w-full justify-center items-start flex-wrap">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
      <NavLink to='/Shop' onClick={scrollToTop}>
        <Button
          size='large'
          variant='contained'
          color='salmon'
          style={{ marginTop: '20px' }}
          onClick={<Shop />}
        >
          Shop Now
        </Button>
      </NavLink>
    </div>

  );
}

export default Services