import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const dummyImages = Array.from({ length: 200 }, (_, i) => `https://picsum.photos/200/200?random=${i + 1}`);

const Image = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  const [images, setImages] = useState(dummyImages);
  const [previewImage, setPreviewImage] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage =50;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handleFullImage = (url) => {
    navigate(`/full-image?src=${encodeURIComponent(url)}`);
  };
// **
useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, [currentPage]);
// *
  const handleDeleteImage = (url) => {
    const updatedImages = images.filter((img) => img !== url);
    setImages(updatedImages);

    if (updatedImages.length <= indexOfFirstImage && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }

    if (previewImage === url) {
      setPreviewImage(null);
    }
  };

  // const handlePrevPage = () => {
  //   setCurrentPage((prev) => Math.max(prev - 1, 1));
  //   window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top
  // };

  // const handleNextPage = () => {
  //   setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  //   window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top
  // };
  // **
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
// **  
  return (
    <div className="p-4 relative">
      <h2 className="text-xl font-bold mb-4">Hi, {username}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {currentImages.map((img, idx) => (
          <div key={idx} className="relative border rounded overflow-hidden shadow">
            <button
              className="absolute top-1 right-1 bg-red-500 rounded-full p-1 text-sm hover:bg-green-500 hover:text-white transition"
              onClick={() => handleDeleteImage(img)}
            >
              <FaTimes />
            </button>

            <img
              src={img}
              alt={`Random ${idx}`}
              loading="lazy"
              className="w-full h-40 object-cover"
            />

            <div className="flex justify-between px-2 py-2">
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
                onClick={() => setPreviewImage(img)}
              >
                Preview
              </button>
              <button
                className="bg-green-500 text-white px-2 py-1 rounded text-sm"
                onClick={() => handleFullImage(img)}
              >
                Full Image
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-gray-500 text-white px-4 py-1 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-500 text-white px-4 py-1 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Preview Popup */}
      {previewImage && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/60 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-2xl hover:text-red-400"
            onClick={() => setPreviewImage(null)}
          >
            <FaTimes />
          </button>

          <img
            src={previewImage}
            alt="Preview"
            loading="lazy"
            className="w-full max-w-xl h-auto rounded shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Image;

// ****************  infinity loop horizontal
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { FaTimes } from 'react-icons/fa';

// const dummyImages = Array.from({ length: 200 }, (_, i) => `https://picsum.photos/200/200?random=${i + 1}`);

// const Image = () => {
//   const { username } = useParams();
//   const navigate = useNavigate();

//   const [images, setImages] = useState(dummyImages);
//   const [previewImage, setPreviewImage] = useState(null);

//   const [currentPage, setCurrentPage] = useState(1);
//   const imagesPerPage = 50;

//   const totalPages = Math.ceil(images.length / imagesPerPage);

//   const indexOfLastImage = currentPage * imagesPerPage;
//   const currentImages = images.slice(0, indexOfLastImage); // All images till current page

//   const handleFullImage = (url) => {
//     navigate(`/full-image?src=${encodeURIComponent(url)}`);
//   };

//   const handleDeleteImage = (url) => {
//     const updatedImages = images.filter((img) => img !== url);
//     setImages(updatedImages);

//     if (previewImage === url) {
//       setPreviewImage(null);
//     }
//   };

//   // ✅ Infinite scroll only
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const innerHeight = window.innerHeight;
//       const scrollHeight = document.documentElement.scrollHeight;

//       if (scrollY + innerHeight >= scrollHeight - 100) {
//         if (currentPage < totalPages) {
//           setCurrentPage((prev) => prev + 1);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [currentPage, totalPages]);

//   return (
//     <div className="p-4 relative">
//       <h2 className="text-xl font-bold mb-4">Hi, {username}</h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//         {currentImages.map((img, idx) => (
//           <div key={idx} className="relative border rounded overflow-hidden shadow">
//             <button
//               className="absolute top-1 right-1 bg-red-500 rounded-full p-1 text-sm hover:bg-green-500 hover:text-white transition"
//               onClick={() => handleDeleteImage(img)}
//             >
//               <FaTimes />
//             </button>

//             <img
//               src={img}
//               alt={`Random ${idx}`}
//               loading="lazy"
//               className="w-full h-40 object-cover"
//             />

//             <div className="flex justify-between px-2 py-2">
//               <button
//                 className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
//                 onClick={() => setPreviewImage(img)}
//               >
//                 Preview
//               </button>
//               <button
//                 className="bg-green-500 text-white px-2 py-1 rounded text-sm"
//                 onClick={() => handleFullImage(img)}
//               >
//                 Full Image
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Preview Popup */}
//       {previewImage && (
//         <div className="fixed inset-0 backdrop-blur-sm bg-black/60 flex items-center justify-center z-50">
//           <button
//             className="absolute top-4 right-4 text-2xl hover:text-red-400"
//             onClick={() => setPreviewImage(null)}
//           >
//             <FaTimes />
//           </button>

//           <img
//             src={previewImage}
//             alt="Preview"
//             loading="lazy"
//             className="w-full max-w-xl h-auto rounded shadow-lg"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Image;


