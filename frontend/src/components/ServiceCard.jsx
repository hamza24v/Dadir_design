import React from "react";

function ServiceCard({ title, description, image }) {
  return (
    <div
      className="flex flex-col items-center text-center bg-white shadow-lg shadow-blue-200 rounded-lg p-6 hover:-translate-y-3 transition duration-300"
    >
      <div
        className="w-[80%] h-[40vh] mb-4 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <p className="font-bold text-2xl mb-2">{title}</p>
      <p className="text-gray-700 text-[17px]">{description}</p>
    </div>
  );
}

export default ServiceCard;
