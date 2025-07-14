import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section>
      <video
        className="relative w-full h-screen object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/reel2.mp4" type="video/mp4" />
       
      </video>
      {/* Text and Button Overlay */}
      <div className="absolute inset-0 flex flex-col items-center top-80 text-white bg- bg-opacity-40">
        <h1 className="text-4xl text- 7\=- 0   md:text-6xl font-bold mb-4 text-center">
         <span className="font-[Aquire] "> Welcome to</span> <span className="font-[Akram] text-red-700">میزی</span>
        </h1>
        <p className="text-lg mb-6 text-center">
          <span className="font-[ClashDisplay] text-gray-500">Discover unique fashion Designer</span>
        </p>
        <button className="px-6 py-3 bg-black font-[ClashDisplay] hover:bg-[#44484a]  rounded-full text-white font-semibold shadow-lg">
          <Link to='/Products'>Modern Design</Link>
        </button>
      </div>
    </section>
  );
}

export default Hero;
