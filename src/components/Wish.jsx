import React, { useState, useRef, useEffect } from "react";
import videoSrc from "../assets/video.mp4";
import { Link, useParams } from "react-router-dom";
import { GetDocument } from "../App";

import heading from "../assets/heading.png";
import bottom from "../assets/bottom.png";
import Loader from "./Loader";

const Wish = () => {
  const [Name, setName] = useState("Name");
  const [Message, setMessage] = useState(
    "Experience joy and creativity like never before."
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    GetDocument(id).then((data) => {
      if (data) {
        setName(data.Name);
        setMessage(data.Message);
      }
    });
  }, [id]);

  const handlePlayPause = () => {
    setIsLoading(false);
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {isLoading && (
        <div className=" absolute z-10 w-screen min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-4">
          <button
            onClick={handlePlayPause}
            className="bg-yellow-500 animate-pulse rounded-lg text-black font-bold text-xl py-3 px-6  transition-transform transform hover:scale-105"
          >
            PLAY
          </button>
        </div>
      )}
      <video
        ref={videoRef}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 object-cover"
        loop
        muted={!isPlaying} // Unmute only when playing
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col items-center overflow-y-scroll bg-black bg-opacity-50">
        <img
          className="h-30 w-full max-w-sm animate-pulse"
          src={heading}
          alt="heading"
        />
        <div className="text-center w-full px-10 flex flex-col gap-5">
        <h1 className="bg-gradient-to-tr bg-clip-text text-2xl text-transparent font-bold   from-yellow-100 via-yellow-200 to-red-800 ">
            {Name}
          </h1>
          <h1 className="bg-gradient-to-r bg-clip-text text-2xl text-transparent font-bold   from-yellow-300 via-yellow-600 to-yellow-900 ">
            Wishes you a very happy Diwali !!!
          </h1>
          <div className=" w-full bg-transparent mt-10 overflow-hidden ">
            <p className="bg-gradient-to-r bg-clip-text text-2xl text-transparent font-bold    from-yellow-100 via-yellow-200 to-yellow-400 ">
            " {Message} "
            </p>
          </div>
          {/* Play/Pause Button */}
          {!isPlaying ? (
            <button
              onClick={handlePlayPause}
              className="bg-white text-black px-6 py-3 rounded-full text-xl font-bold hover:bg-gray-200 transition"
            >
              {isPlaying ? "Pause Video" : "Play Video"}
            </button>
          ) : (
            <Link to="/">
              <button className="bg-gradient-to-r    from-yellow-300 via-yellow-600 to-yellow-900  text-black px-6 py-3 rounded-full text-xl font-bold hover:bg-gray-200 transition">
                Make Your own
              </button>
            </Link>
          )}
        </div>
        <img
          className="h-30 w-full max-w-sm animate-pulse"
          src={bottom}
          alt="bottom"
        />
      </div>
    </div>
  );
};

export default Wish;
