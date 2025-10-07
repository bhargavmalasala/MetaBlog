import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <section className="relative w-full py-20 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Discover <span className="text-[#4B6BFB]">Powerful</span> Tech Blogs
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-xl">
            Dive into a world of curated tech content crafted for developers, learners, and tech lovers.
          </p>
          <Link to="/blogs">
            <button className="mt-6 px-6 py-3 bg-[#4B6BFB] text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-md">
              Browse Blogs
            </button>
          </Link>
        </div>

        {/* Image or Illustration */}
        <div className="flex-1 flex justify-center">
          <img 
            src={assets.hero} 
            alt="Hero Graphic" 
            className="w-[90%] max-w-[500px] drop-shadow-[0_4px_30px_rgba(75,107,251,0.3)]"
          />
        </div>
      </div>

      {/* Decorative blurred blob (optional) */}
      <div className="absolute -top-10 -right-10 w-80 h-80 bg-[#4B6BFB] rounded-full blur-3xl opacity-30 z-0"></div>
    </section>
  );
};

export default Hero;
