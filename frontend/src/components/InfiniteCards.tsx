import classnames from "classnames";
import React, { useEffect, useState } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import AvatarIcon from './AvatarIcon';

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

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    author: string;
    img: string;
    rating: number;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      const animationDirection = direction === "left" ? "normal" : "reverse";
      containerRef.current.style.setProperty("--animation-direction", animationDirection);
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={classnames(
        "scroller relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={classnames(
          " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[70vw] max-w-[700px] relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-400 p-5 md:p-16 md:w-[60vw]"
            style={{
              background: "rgb(214, 214, 248)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              
              <span className="relative z-20 text-sm md:text-lg leading-[1.6]  font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                
                <span className="flex flex-col gap-1">
                 
                  <span className="text-xl font-bold leading-[1.6] ">
                    {item.author}
                  </span>
                </span>
              </div>
              <StarRating rating={item.rating} />
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};