import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonials } from '../constants/testimonials';
import TestimonialCard from './TestimonialCard';

function Testimonials() {

  return (
    <div className='my-5 w-full h-auto'>
      <h2 className='text-3xl font-semibold text-center mb-4'>What Our Clients Say</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className='h-auto'
      >
        {testimonials.map(({ id, text, author, date, rating }) => (
          <SwiperSlide key={id} className='max-h-400'>
            <TestimonialCard
              text={text}
              author={author}
              date={date}
              rating={rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
