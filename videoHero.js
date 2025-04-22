"use client";
import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa"; // Ikonice

function VideoHero() {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <main className="relative w-full h-[480px] overflow-hidden">
      {/* VIDEO */}
      <video
        ref={videoRef}
        className="w-full h-[480px] object-cover z-10 rounded-2xl"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/rfC1p1gUmOqGA6GUrdSJt8IjRA4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* OVERLAY TEKST */}
      <div className="absolute bottom-0 w-full h-full flex items-center justify-center z-10">
        <h1 className="text-white text-[3rem] w-[55%] leading-[1.2] font-medium text-center drop-shadow-lg">
          Showcase your products in action and outline their benefits.
        </h1>
      </div>

      {/* PLAY/PAUSE DUGME */}
      <button
        onClick={togglePlay}
        className="absolute top-5 right-5 bg-[#ede4fc] bg-opacity-50 text-white p-3 rounded-full z-20 cursor-pointer hover:bg-opacity-70 transition"
      >
        {isPaused ? <FaPlay className="text-xl text-black" /> : <FaPause className="text-xl text-black" />}
      </button>
    </main>
  );
}

export default VideoHero;
