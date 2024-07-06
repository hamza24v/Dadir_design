import React from 'react'

function GalleryItem({ item }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full h-64 object-cover mb-4 " src={item.imageUrl} alt={item.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>
    </div>
  )
}

export default GalleryItem