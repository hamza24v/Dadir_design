import React, { useState, useRef, useEffect } from 'react';
import AvatarIcon from './AvatarIcon';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

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

const TestimonialCard = ({ text, author, date, rating }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflow, setIsOverflow] = useState(false);
    const contentRef = useRef(null);
    const swiper = useSwiper(); 

    useEffect(() => {
        const contentHeight = contentRef.current.scrollHeight;
        const containerHeight = contentRef.current.clientHeight;
        setIsOverflow(contentHeight > containerHeight);
    }, [isExpanded]);


    const handleReadMore = () => {
      setIsExpanded((prev) => !prev);
      setTimeout(() => {
        swiper.update();
      }, 0);
    };

    return (
        <div className=" flex flex-col h-auto items-center justify-center p-4 mb-9 bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out transform">
            <div className='w-full flex justify-between'>
                <div className="flex flex-row items-center justify-between">
                    <AvatarIcon name={author} />
                    <div className='ml-2 flex flex-col items-start'>
                        <p className="text-sm font-medium text-gray-600">{author}</p>
                        <StarRating rating={rating} />
                    </div>
                </div>
                <p className=" mt-1 text-sm font-medium text-gray-600">{date}</p>
                
            </div>

            <div className="transition-all ease-in-out duration-700 relative h-auto overflow-hidden" ref={contentRef}>
                <p className={`${isExpanded ? 'max-h-90' : 'max-h-40'} text-lg text-gray-800`}>{text}</p>
                {isOverflow && !isExpanded && (
                    <button
                        className="absolute bottom-0 right-0 bg-white text-blue-500"
                        onClick={handleReadMore}
                    >
                        ...Read more
                    </button>
                )}
                {!isOverflow && isExpanded && (
                    <button
                        className="absolute bottom-0 right-0 bg-white text-blue-500"
                        onClick={handleReadMore}
                    >
                        ...Read less
                    </button>
                )}
            </div>
        </div>
    );
};

export default TestimonialCard;