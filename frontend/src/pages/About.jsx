import React from "react";
import { assets } from "../assets/assets";
import { FaLightbulb, FaPenFancy, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-6">
      {/* Section Title */}
      <h1 className="text-5xl z-20 font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-pulse">
        Who We Are
      </h1>

      {/* Intro Story */}
      <p className="text-gray-300 text-center text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
        At <span className="text-pink-400 font-bold">Meta Blog</span>, we don't just write blogs—we tell stories that matter. Whether you're diving into the world of tech, exploring lifestyle hacks, or simply fueling your curiosity—we're your creative hub.
      </p>

      {/* 3 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-pink-500/30 transition-all duration-300">
          <FaLightbulb className="text-4xl mx-auto mb-4 text-yellow-400" />
          <h3 className="text-xl font-bold mb-2">Inspiring Ideas</h3>
          <p className="text-gray-400">
            From tech trends to life hacks, we spark curiosity with every post.
          </p> 
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
          <FaPenFancy className="text-4xl mx-auto mb-4 text-purple-400" />
          <h3 className="text-xl font-bold mb-2">Creative Writing</h3>
          <p className="text-gray-400">
            Each blog is crafted with passion and a voice that resonates.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
          <FaUsers className="text-4xl mx-auto mb-4 text-indigo-400" />
          <h3 className="text-xl font-bold mb-2">Community-Driven</h3>
          <p className="text-gray-400">
            We grow with you—readers, writers, and learners from around the globe.
          </p>
        </div>
      </div>

      {/* Hero Image with Glow */}
      <div className="flex justify-center">
        <img
          src={assets.about}
          alt="About us"
          className="rounded-2xl max-w-5xl w-full shadow-[0_0_40px_rgba(255,0,128,0.4)]"
        />
      </div>

      {/* Call to Action */}
      <div className="text-center mt-14">
        <p className="text-lg text-gray-400 mb-4">Want to contribute your voice?</p>
        <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-600 hover:to-pink-600 px-6 py-3 text-lg font-semibold rounded-full shadow-md hover:shadow-xl transition-all duration-300">
          Join Our Creator Team
        </button>
      </div>
    </div>
  );
};

export default About;
