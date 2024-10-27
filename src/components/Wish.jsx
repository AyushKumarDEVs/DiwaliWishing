import React, { useState, useRef, useEffect } from 'react';
import videoSrc from '../assets/video.mp4';
import { Link, useParams } from 'react-router-dom';
import { GetDocument } from '../App';

import heading from "../assets/heading.png";
import bottom from "../assets/bottom.png";


const Wish = () => {
  const [Name, setName] = useState("Name");
  const [Message, setMessage] = useState("Experience joy and creativity like never before.");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const {id}=useParams();

  useEffect(() => {
    console.log(id)
    GetDocument(id).then((data)=>{
        if(data){
            console.log(data)
            setName(data.Name)
            setMessage(data.Message)
        }
    })
  }, [])
  

  const handlePlayPause = () => {

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 object-cover"
        loop
        muted={!isPlaying} // Unmute only when playing
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col items-center  bg-black bg-opacity-50">
        <img className='h-30 w-full max-w-sm animate-pulse ' src={heading} alt="jj" />
        <div className="text-center flex flex-col gap-10">
          <h1 className="text-white text-xl md:text-6xl font-bold mb-4">
            {Name} is wishing you a very happy Diwali
          </h1>
          <p className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent text-xl md:text-4xl font-semibold">
            {Message}
          </p>
          {/* Play/Pause Button */}
          {
!isPlaying&&<button
onClick={handlePlayPause}
className="bg-white text-black px-6 py-3 rounded-full text-xl font-bold hover:bg-gray-200 transition"
>
{isPlaying ? "Pause Video" : "Play Video"}
</button>

          }
          
          {
            isPlaying&& <Link to={"/"}>
          
          
            <button
              
              className="bg-white  text-black px-6 py-3 rounded-full text-xl font-bold hover:bg-gray-200 transition"
            >
              {"Make Your own"}
            </button>
  
            </Link>
          }
         
        </div>
        <img className='h-30 w-full max-w-sm animate-pulse ' src={bottom} alt="" />

      </div>
    </div>
  );
};

export default Wish;
