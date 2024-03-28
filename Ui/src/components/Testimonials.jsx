import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonials } from '../constants/testimonials';
import AvatarIcon from './AvatarIcon';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const totalStars = 5;

  const stars = Array.from({ length: totalStars }, (_, index) => {
    if (index < fullStars) {
      return <FaStar key={index} className="text-yellow-500" />;
    } else if (hasHalfStar && index === fullStars) {
      return <FaStarHalfAlt key={index} className="text-yellow-500" />;
    } else {
      return <FaRegStar key={index} className="text-yellow-500" />;
    }
  });
  return <div className="flex">{stars}</div>;
}
function Testimonials() {

  return (
    <div className='max-w-[1000px] h-50 bg-white shadow-lg rounded-lg'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {testimonials.map(({ id, text, author, date, rating }) => (
          <SwiperSlide key={id} >
            <div className="flex flex-col items-center justify-center p-4 mb-5 ">
              <div className='w-full flex justify-between'>
                <div className="flex flex-row items-center justify-between">
                  <AvatarIcon name={author} />
                  <div className='ml-2 flex flex-col items-start'>
                    <p className="text-sm font-medium text-gray-600">{author}</p>
                    <StarRating rating={rating} />
                  </div>
                </div>
                <p className=" mt-5 text-sm font-medium text-gray-600">{date}</p>
              </div>
              <p className="text-lg text-gray-800">{text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
