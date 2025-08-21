"use client";

import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"; // For social media icons
import React, { useEffect, useState } from "react";

const NotFound = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white flex flex-col justify-center items-center py-20 transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className='text-center'>
        <h1 className='text-6xl font-bold mb-4 animate-pulse'>Oops! 😱</h1>
        <p className='text-2xl mb-6'>
          It seems you've wandered into a page that doesn't exist.
        </p>

        {/* Emoji or graphic */}
        <div className='mb-6 text-7xl animate-bounce'>
          <span role='img' aria-label='404-error'>
            🚀
          </span>
        </div>

        {/* Go Home button */}
        <Link
          href='/'
          className='transition duration-300 px-6 py-3 bg-yellow-300 text-black rounded-lg text-xl font-semibold hover:bg-yellow-400 hover:text-white hover:underline'
        >
          Go to Home
        </Link>
      </div>

      {/* Social Media Links */}
      <div className='mt-8 flex gap-6 text-2xl'>
        <Link
          href='https://twitter.com'
          className='transition duration-300 text-white hover:text-yellow-300'
        >
          <FaTwitter />
        </Link>
        <Link
          href='https://github.com'
          className='transition duration-300 text-white hover:text-yellow-300'
        >
          <FaGithub />
        </Link>
        <Link
          href='https://www.linkedin.com'
          className='transition duration-300 text-white hover:text-yellow-300'
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
