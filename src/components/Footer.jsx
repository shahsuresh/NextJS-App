"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-8'>
      <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center'>
        <div className='text-lg font-semibold mb-4 md:mb-0'>
          <span className='text-yellow-300'>MySite</span> &copy;{" "}
          {new Date().getFullYear()}
        </div>
        <ul className='flex gap-8 text-lg'>
          <li>
            <Link
              href='/'
              className='transition duration-300 hover:text-yellow-300 hover:underline underline-offset-4'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/services'
              className='transition duration-300 hover:text-yellow-300 hover:underline underline-offset-4'
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className='transition duration-300 hover:text-yellow-300 hover:underline underline-offset-4'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='transition duration-300 hover:text-yellow-300 hover:underline underline-offset-4'
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
