import { useState } from 'react';
import useTransition from 'react-transition-state';


function App() {
  const [currentImage, setCurrentImage] = useState('');
  const [lightboxActive, setLightboxActive] = useState(false);
  const [lightboxState, toggleLightbox] = useTransition({ timeout: 150, preEnter: true });

  const firstGrid = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  ];

  const secondGrid = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  ];

  const thirdGrid = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
  ];

  const fourthGrid = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  ];

  const handleImageClick = (src:string) => {
    setCurrentImage(src);
    toggleLightbox();  // Trigger the transition
    setLightboxActive(true);  // Activate the lightbox
  };

  const handleLightboxClick = () => {
    toggleLightbox();  // Toggle transition to close
    setTimeout(() => {
      setLightboxActive(false);  // Close lightbox after transition finishes
    }, 150);
  };

  return (
    <div className="grid lg:max-w-[1420px] mt-10 mx-auto px-4 grid-cols-2 md:grid-cols-4 gap-4">
      <div className='flex flex-col gap-4'>
        {firstGrid.map((src, index) => (
          <div key={index} className="grid gap-4">
            <div>
              <img 
                className="h-auto max-w-full rounded-lg cursor-pointer" 
                src={src} 
                alt={`Image ${index + 1}`} 
                onClick={() => handleImageClick(src)} 
              />
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-4'>
        {secondGrid.map((src, index) => (
          <div key={index} className="grid gap-4">
            <div>
              <img 
                className="h-auto max-w-full rounded-lg cursor-pointer" 
                src={src} 
                alt={`Image ${index + 1}`} 
                onClick={() => handleImageClick(src)} 
              />
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-4'>
        {thirdGrid.map((src, index) => (
          <div key={index} className="grid gap-4">
            <div>
              <img 
                className="h-auto max-w-full rounded-lg cursor-pointer" 
                src={src} 
                alt={`Image ${index + 1}`} 
                onClick={() => handleImageClick(src)} 
              />
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-4'>
        {fourthGrid.map((src, index) => (
          <div key={index} className="grid gap-4">
            <div>
              <img 
                className="h-auto max-w-full rounded-lg cursor-pointer" 
                src={src} 
                alt={`Image ${index + 1}`} 
                onClick={() => handleImageClick(src)} 
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox with useTransition */}
      {lightboxActive && (
        <div
          className={`lightbox ${lightboxState.status}`} 
          onClick={handleLightboxClick}
          style={{
            transition: 'opacity 300ms ease-in-out',
            opacity: lightboxState.status === 'entered' ? 1 : 0,
            display: lightboxState.status === 'exited' ? 'none' : 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 9999,
          }}
        >
          <img src={currentImage} alt="Lightbox Image" className="max-h-full max-w-full" />
        </div>
      )}


    </div>
  );
}

export default App;
