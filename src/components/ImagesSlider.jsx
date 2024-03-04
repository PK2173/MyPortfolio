import React, { useState, useEffect } from 'react';


const SlideShow = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = props.imgarr; 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500); 

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div>
      <img src={images[currentIndex]} alt={`slide-${currentIndex}`} />
    </div>
  );
};

export default SlideShow;
