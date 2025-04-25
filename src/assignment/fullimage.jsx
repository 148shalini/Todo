// FullImage.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const FullImage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const imageUrl = searchParams.get('src');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Full Image</h1>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Full Size"
          className="w-full max-w-xl h-auto rounded shadow-lg"
        />
      ) : (
        <p className="text-gray-500">No image to display.</p>
      )}
    </div>
  );
};

export default FullImage;
