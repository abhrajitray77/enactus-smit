import React, { useState, useEffect } from 'react';
import Image from "next/image";
import x from "../../public/imgs/x.jpeg";
import y from "../../public/imgs/y.png";
import z from "../../public/imgs/z.png";


const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [x, y, z];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, [currentIndex, images.length]);
  
    return (
      <div className="relative container mx-auto">
        <div className="relative overflow-hidden ">
          <div className="relative -mx-4">
            {images.map((image, index) => (
                
              <Image
               
                key={index}
                className={`w-auto  animate-fadein-out   duration-300 opacity-0 mt-20 h-72 mx-auto ${index === currentIndex ? 'opacity-100' : ''}`}
                src={image}
                height={100}
                width={200}
                alt={`Fade ${index + 1}`}
              />
              
            ))}
          </div>
          {/* <button
            className="absolute left-0 top-0.5px transform -translate-y-1/2  opacity-80 h-40 p-3" 
            onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
          >
            <svg className="h-40 w-40 "   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            className="absolute right-0 top-0.5px transform -translate-y-1/2  opacity-80 p-3"
            onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
          >
            <svg className="h-40 w-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
      </div>
    );
  };
  
  export default Slider
