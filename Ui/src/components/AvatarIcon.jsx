import React from 'react';

const AvatarIcon = ({ name }) => {
  const lightColors = [
    'bg-red-200', 'bg-green-200', 'bg-blue-200', 'bg-yellow-200', 
    'bg-pink-200', 'bg-purple-200', 'bg-indigo-200'
  ];

  
  const getRandomColor = () => {
    return lightColors[Math.floor(Math.random() * lightColors.length)];
  };

  
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <div className={`w-20 h-20 flex items-center justify-center rounded-full ${getRandomColor()} text-[43px] text-white font-bold`}>
      {firstLetter}
    </div>
  );
};

export default AvatarIcon;
