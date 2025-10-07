import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-black via-[#0F172A] to-[#12233e] text-gray-300">
      {/* Top Section */}
      <div className="flex flex-col py-12 md:flex-row items-center justify-between gap-10 px-6">
        {/* About */}
        <div className="w-full sm:w-1/3 flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
          <h1 className="text-xl font-bold text-white">About</h1>
          <p>
            Meta Blog is a student-focused platform where aspiring developers come
            together to share their knowledge, experiences, and growth in the
            field of coding. Whether it's an insightful article, a personal
            journey through learning a new technology, or a detailed roadmap to
            mastering web development, Bloggy serves as a space for students to
            express, explore, and educate.
          </p>
          <h4>Email: tzbhargav@gmail.com</h4>
          <h4>Phone: 987654321</h4>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="mb-4 text-xl font-bold text-white">Quick Links</h1>
          <ul className="flex flex-col gap-2">
            <Link
              className="hover:text-white transition-colors duration-200"
              to="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-white transition-colors duration-200"
              to="/blogs"
            >
              Blogs
            </Link>
            <Link
              className="hover:text-white transition-colors duration-200"
              to="/about"
            >
              About
            </Link>
            <Link
              className="hover:text-white transition-colors duration-200"
              to="/contact"
            >
              Contact
            </Link>
          </ul>
        </div>

        {/* Categories */}
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="mb-4 text-xl font-bold text-white">Categories</h1>
          <ul className="flex flex-col gap-2">
            <Link className="hover:text-white transition-colors duration-200">
              Weather
            </Link>
            <Link className="hover:text-white transition-colors duration-200">
              LifeStyle
            </Link>
            <Link className="hover:text-white transition-colors duration-200">
              Technology
            </Link>
            <Link className="hover:text-white transition-colors duration-200">
              News
            </Link>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-600 mx-6" />

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left px-6 py-4 text-sm text-gray-400">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <img src={assets.logo} alt="logo" className="h-6 w-6" />
          <p>
            Meta <span className="font-bold text-white text-base">Blog</span>
          </p>
        </div>
        <ul className="flex flex-col sm:flex-row items-center gap-3">
          <li className="hover:text-gray text-white cursor-pointer">
            Privacy Policy
          </li>
          <li className="hover:text-gray text-white cursor-pointer">
            Terms & Conditions
          </li>
          <li className="hover:text-gray text-white cursor-pointer">
            © Grab a coffee
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
